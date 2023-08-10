import { importShared } from "./__federation_fn_import.js";
const App_vue_vue_type_style_index_0_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {};
const { createElementVNode: _createElementVNode, createStaticVNode: _createStaticVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = await importShared("vue");
const _hoisted_1 = { class: "v-root" };
const _hoisted_2 = /* @__PURE__ */ _createStaticVNode('<div class="v-container"><div class="column"><img src="https://images.unsplash.com/photo-1611510338559-2f463335092c?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=764&amp;q=80" alt=""></div><div class="column"><h1 class="page-title">About Us</h1><p class="description">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui et dui fringilla consectetur id nec massa. Aliquam erat volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt neque. Sed sed lacinia lectus. Duis sit amet sodales felis. Duis nunc eros, mattis at dui ac, convallis semper risus. In adipiscing ultrices tellus, in suscipit massa vehicula eu.”</p></div></div>', 1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return _openBlock(), _createElementBlock("div", _hoisted_1, _hoisted_3);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  App as default
};
