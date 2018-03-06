购物车与用户表结构：

--
-- 购物车表的结构 `mall_carts`
--

CREATE TABLE `mall_carts` (
  `cid` int(11) NOT NULL auto_increment,
  `uid` int(11) NOT NULL,
  `pid` int(11) NOT NULL,
  `title` varchar(255) collate utf8_unicode_ci NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `amount` int(11) NOT NULL,
  `img` varchar(255) collate utf8_unicode_ci NOT NULL,
  `status` tinyint(1) NOT NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;


--
-- 用户表的结构 `mall_users`
--

CREATE TABLE `mall_users` (
  `uid` int(11) NOT NULL auto_increment,
  `email` varchar(50) collate utf8_unicode_ci NOT NULL,
  `password` varchar(50) collate utf8_unicode_ci NOT NULL,
  `firstname` varchar(50) collate utf8_unicode_ci default NULL,
  `lastname` varchar(50) collate utf8_unicode_ci default NULL,
  `score` int(11) default '100',
  `level` varchar(50) collate utf8_unicode_ci default 'VIP01',
  `createtime` timestamp NULL default CURRENT_TIMESTAMP,
  PRIMARY KEY  (`uid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1;