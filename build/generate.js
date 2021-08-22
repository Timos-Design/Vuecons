const svgo = require('svgo');
const fs = require('fs');
const path = require('path');
const xmldom = require('xmldom');
const _ = require('lodash');
const { join } = require('path');

const vueFile = _.template(
  `<template>
  <VcIconWrapper :fill="fill" :slash="slash" :circle="circle" :square="square" :rect="rect" :hierarchical="hierarchical" :palette="palette">
    <% _.forEach(paths, function(path, index) { if (index === 0) { %><path :fill="fill ? 'black' : slash ? secondary : primary" d="<%= path %>" /><% } else if (index === 1) { %>
    <path :fill="fill ? 'black' : slash ? tertiary : secondary" :opacity="hierarchical ? 0.5 : 1" d="<%= path %>" /><% } else if (index === 2) { %>
    <path :fill="fill ? 'black' : tertiary" :opacity="hierarchical ? 0.25 : 1" d="<%= path %>" /><% } }); %>
  </VcIconWrapper>
</template>
<script>
import Vue from 'vue';
import VcIconMixin from '@/vcIconWrapper.vue';
import VcIconWrapper from '@/vcIconWrapper.vue';
export default Vue.extend({ name: '<%= name %>', mixins: [VcIconMixin], components: { VcIconWrapper } });
</script>`
);

const indexFile = _.template(`/* eslint-disable import/prefer-default-export */
<% _.forEach(icons, function(icon) {%>
export { default as <%= icon.export %> } from './<%= icon.name %>.vue';<% }); %>`);

const minFolder = path.join('src', 'icons.min');
const vueFolder = path.join('src', 'lib-components');

fs.rmdirSync(vueFolder, { recursive: true, force: true });
fs.mkdirSync(vueFolder);

if (!fs.existsSync(minFolder)) return;

fs.readdirSync(minFolder, 'utf-8').forEach((file) => {
  const data = fs.readFileSync(path.join(minFolder, file), 'utf-8');
  const dom = new xmldom.DOMParser().parseFromString(data, 'image/svg+xml');
  const paths = Array.from(
    dom.getElementsByTagName('g')[0].getElementsByTagName('path')
  )
    .sort((a, b) => {
      const bO = +b.getAttribute('opacity') || 1;
      const aO = +a.getAttribute('opacity') || 1;
      return bO - aO;
    })
    .map((x) => x.getAttribute('d'));

  const { length } = path.extname(file);
  const name = ('vc-' + file.substring(0, file.length - length))
    .toLocaleLowerCase()
    .replace(/-(.)/g, (_, g) => {
      return g.toUpperCase();
    });

  const vue = vueFile({ name: name, paths: paths });
  fs.writeFileSync(join(vueFolder, name + '.vue'), vue);
});

const icons = fs.readdirSync(vueFolder, 'utf-8').map((file) => {
  file = file.substring(0, file.length - 4);
  return {
    name: file,
    export: file.charAt(0).toUpperCase() + file.slice(1),
  };
});

const indexF = indexFile({ icons: icons });
fs.writeFileSync(join(vueFolder, 'index.ts'), indexF);
