# Hexo NexT Mastodon Comments

![Theme Version](https://img.shields.io/badge/NexT-v8.4.0+-blue?style=flat-square)
![Package Version](https://img.shields.io/github/package-json/v/feiju12138/hexo-next-mastodon-comments?style=flat-square)

Mastodon Comments system for NexT.

## Install

```bash
npm install hexo-next-mastodon-comments-core
```

## Configure

Set the value `enable` to `true`, add the Mastodon instance domain (`MASTODON_DOMAIN`), and add the Mastodon instance username (`MASTODON_USER`). You can config those in both **hexo** or **theme** `_config.yml`:

```yml next/_config.yml
# Mastodon Comments
# For more information: https://github.com/feiju12138/mastodon-comments https://github.com/feiju12138/hexo-next-mastodon-comments
mastodon-comments:
  enable: false
  MASTODON_DOMAIN: mastodon.social # Mastodon 实例域名
  MASTODON_USER: feiju # Mastodon 实例中根评论发布的用户名
  # JS: https://cdn.jsdelivr.net/gh/feiju12138/mastodon-comments@4/dist/mastodon-comments.min.js # 自定义 JS 文件地址
```

## Add `toot-id` in post header

⚠️ Use quotes for toot-id to avoid JS precision loss.

```md source/_posts/Test.md
---
toot-id: "116164221651686918"
---
```

You can also use [feiju12138/hexo-next-mastodon-comments-helper](https://github.com/feiju12138/hexo-next-mastodon-comments-helper) to auto add `toot-id` in post header.
