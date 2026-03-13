/* global hexo */

"use strict";

// 注入嘟文编号
hexo.extend.filter.register("after_post_render", function (data) {

  // 跳过所有非文章的页面
  if (data.layout !== "post" && data.layout !== "page") {
    return data;
  }

  // 在头部注入嘟文编号
  data.content = [
    `<div id="toot-id" style="display: none">${data["toot-id"]}</div>`,
    data.content
  ].join("");

  return data;
});

// 添加评论
const Util = require("@next-theme/utils");
hexo.extend.filter.register("theme_inject", injects => {
  // 获取配置
  const utils = new Util(hexo, __dirname);
  const config = utils.defaultConfigFile("mastodon-comments", "default.yaml");

  // 判断是否未启用或缺少关键配置
  if (!config.enable || !config.MASTODON_DOMAIN || !config.MASTODON_USER) return;

  // 定义挂载点
  injects.comment.raw("Mastodon Comments", `<div class="comments"><div id="mastodon-comments"></div></div>`, {}, { cache: true });

  // 加载渲染脚本
  injects.bodyEnd.raw("Mastodon Comments", utils.getFileContent("hexo-next-mastodon-comments.njk"));

});
