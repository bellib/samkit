<?php
/*********************************************** 
* @ Samkit 0.1                                 *
* @ Programed by Bellia Habib - SAMSOL -       *   
* @ Tél : 00213 670161303                      *
* @ @ : <bellib@hotmail.fr>                    *
* @ Fb: samsol.samsoli                         *
* @ contry: mecheria -Algeria                  *
* @ feb 2013                                   *
* @ Is  free solft                             *
***********************************************/

     if( ! defined('SAMSOL')) die('Can\'t Script. ');
 
      global $Install_Sam;
     
     /*table category*/
	 
      mysql_query("drop table if exists ".TP."cat") or die(mysql_error());
	  
      mysql_query("CREATE TABLE IF NOT EXISTS `".TP."cat` (
     `c_id` int(10) NOT NULL AUTO_INCREMENT,
     `c_status` int(10) DEFAULT '1',
     `c_name` varchar(100) DEFAULT NULL,
     `c_order` int(10) DEFAULT '1',
     `c_level` int(10) DEFAULT '0',
     `c_site` mediumtext NOT NULL,
     `c_hide` int(10) NOT NULL DEFAULT '0',
     PRIMARY KEY (`c_id`)
     ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;") or die(mysql_error());
 
     mysql_query("INSERT INTO `".TP."cat` (`c_id`, `c_status`, `c_name`, `c_order`, `c_level`, `c_site`, `c_hide`) VALUES
       (1, 1, 'فئة تجريبية لبرنامج المنتديات SAMKIT', 1, 0, '', 0);") or die(mysql_error());
	   
     echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'cat </h1></span></td><tr>';
	 
	  /*table category*/
	  /*
	     table config
	  */
	 mysql_query("drop table if exists ".TP."conf") or die(mysql_error());
	 
	 mysql_query("CREATE TABLE IF NOT EXISTS `".TP."conf` (
     `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
     `var` varchar(255) DEFAULT NULL,
     `value` varchar(255) DEFAULT NULL,
     PRIMARY KEY (`id`)
     ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;") or die(mysql_error());
	 
	  echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'conf </h1></span></td><tr>';
	  
	   /*
	     fin table config
	  */
	  
		  /*
	     table count_ip
	  */
	 mysql_query("drop table if exists ".TP."count_ip") or die(mysql_error());
	 
	 mysql_query("CREATE TABLE IF NOT EXISTS `".TP."count_ip` (
     `stars` varchar(20) DEFAULT NULL,
     `end` varchar(20) DEFAULT NULL,
     `company` varchar(23) DEFAULT NULL,
     `code` varchar(20) DEFAULT NULL,
     `avr` varchar(2) DEFAULT NULL,
     `avrc` varchar(3) DEFAULT NULL,
     `name` varchar(444) DEFAULT NULL
     ) ENGINE=MyISAM DEFAULT CHARSET=utf8;") or die(mysql_error());
	 
	  echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'count_ip </h1></span></td><tr>';
	  
	   /*
	     fin table count_ip
	  */
	  
	   
	  
    /***
	  * @table edit
	 */
	 mysql_query("drop table if exists ".TP."edit") or die(mysql_error());
	 
	 mysql_query("CREATE TABLE IF NOT EXISTS `".TP."edit` (
	 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `user_id` int(11) DEFAULT NULL,
	 `post_id` int(11) DEFAULT NULL,
	 `post_type` char(1) DEFAULT NULL,
	 `change_subject` int(11) DEFAULT '0',
	 `change_message` int(11) DEFAULT '0',
	 `subject` varchar(200) DEFAULT NULL,
	 `message` text,
	 `date` int(10) unsigned DEFAULT NULL,
	 PRIMARY KEY (`id`)
	 ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'edit </h1></span></td><tr>';
	  
    /***
	  * @ fine table edit
	 */

    /***
	  * @table forum
	 */
	 mysql_query("drop table if exists ".TP."forum") or die(mysql_error());
	 
	 mysql_query("CREATE TABLE IF NOT EXISTS `".TP."forum` (
	 `cat_id` int(10) DEFAULT NULL,
	 `f_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `f_status` int(10) DEFAULT '1',
	 `f_name` varchar(100) DEFAULT NULL,
	 `f_desc` text,
	 `f_topics` int(10) DEFAULT '0',
	 `f_replies` int(10) DEFAULT '0',
	 `f_lp_date` int(10) unsigned DEFAULT NULL,
	 `f_lp_author` int(10) DEFAULT NULL,
	 `f_order` int(10) DEFAULT '1',
	 `f_logo` varchar(255) DEFAULT NULL,
	 `f_sex` int(10) DEFAULT '0',
	 `f_top_day` int(11) DEFAULT '5',
	 `f_rep_day` int(11) DEFAULT '200',
	 `f_level` int(10) NOT NULL DEFAULT '0',
	 `f_hide` int(11) DEFAULT '0',
	 `f_approve` int(11) DEFAULT '0',
	 `f_sig` int(10) DEFAULT '1',
	 `f_photo` int(10) DEFAULT '1',
	 `f_approve2` int(10) DEFAULT '1',
	 `t_lockreply` int(10) DEFAULT '200',
	 `f_extra` varchar(100) DEFAULT NULL,
	 `f_mon` int(10) DEFAULT NULL,
	 `f_mon_date` int(10) unsigned DEFAULT NULL,
	 `f_mon_hide` int(11) DEFAULT '0',
	 `f_archive` int(10) DEFAULT '0',
	 `f_onlinef` int(11) DEFAULT '0',
	 `change_rep` int(11) DEFAULT '1',
	 `change_top` int(11) DEFAULT '1',
	 PRIMARY KEY (`f_id`)
	 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].' forum </h1></span></td><tr>';
	 
	 mysql_query("INSERT INTO `".TP."forum` (`cat_id`, `f_id`, `f_status`, `f_name`, `f_desc`, `f_topics`, `f_replies`, `f_lp_date`, `f_lp_author`, `f_order`, `f_logo`, `f_sex`, `f_top_day`, `f_rep_day`, `f_level`, `f_hide`, `f_approve`, `f_sig`, `f_photo`, `f_approve2`, `t_lockreply`, `f_extra`, `f_mon`, `f_mon_date`, `f_mon_hide`, `f_archive`, `f_onlinef`, `change_rep`, `change_top`) VALUES
	 (1, 1, 1, 'منتدى تجريبي لنسخة المنتديات SAMKIT', 'البرمجة و التطوير بواسطة SAMSOL', 1, 0, 1380446497, 1, 1, NULL, 0, 5, 200, 0, 0, 0, 1, 1, 1, 200, NULL, NULL, NULL, 0, 0, 0, 1, 1);
	 ") or die(mysql_error());
	  
    /***
	  * @ fine table edit
	 */	 
	  
    /***
	  * @table hide_forum
	 */
	 mysql_query("drop table if exists ".TP."hide_forum ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."hide_forum` (
	 `hf_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `hf_user_id` int(11) DEFAULT NULL,
	 `hf_forum_id` int(11) DEFAULT NULL,
	 `hf_cat_id` int(11) DEFAULT NULL,
	 PRIMARY KEY (`hf_id`)
	 ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'hide_forum </h1></span></td><tr>';
	  
    /***
	  * @ fine table hide_forum
	 */
	  
    /***
	  * @table hide_forum
	 */
	 mysql_query("drop table if exists ".TP."key_word ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."key_word` (
	 `k_id` int(250) NOT NULL AUTO_INCREMENT,
	 `k_cat_id` int(250) NOT NULL,
	 `k_word` mediumtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	 PRIMARY KEY (`k_id`)
	 ) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'key_word </h1></span></td><tr>';
	  
    /***
	  * @ fine table hide_forum
	 */
	 
	 	  
    /***
	  * @ fine table hide_forum
	 */
	  
    /***
	  * @table mods
	 */
	 mysql_query("drop table if exists ".TP."mods ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."mods` (
	 `mod_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `f_id` int(11) DEFAULT '0',
	 `u_id` int(11) DEFAULT '0',
	 `hide_mod` int(10) DEFAULT '0',
	 `mod_date` int(10) unsigned DEFAULT NULL,
	 PRIMARY KEY (`mod_id`)
	 ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'mods </h1></span></td><tr>';
	  
    /***
	  * @ fine table mods
	 */
	  
    /***
	  * @table onlin
	 */
	 mysql_query("drop table if exists ".TP."onlin ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."onlin` (
	 `o_id` int(20) NOT NULL AUTO_INCREMENT,
	 `o_main` int(20) NOT NULL,
	 `o_frm` int(20) NOT NULL,
	 `o_top` int(20) NOT NULL,
	 `o_ip` varchar(20) NOT NULL,
	 `o_dat` int(22) NOT NULL,
	 `o_uid` int(20) NOT NULL,
	 PRIMARY KEY (`o_id`)
	 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=35 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'onlin </h1></span></td><tr>';
	  
    /***
	  * @ fine table onlin
	 */

	 
	/***
	  * @table replies
	 */
	 mysql_query("drop table if exists ".TP."replies ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."replies` (
	 `cat_id` int(11) DEFAULT '0',
	 `forum_id` int(11) DEFAULT '0',
	 `topic_id` int(11) DEFAULT '0',
	 `reply_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `r_author` int(11) DEFAULT '0',
	 `r_message` text,
	 `r_date` int(10) unsigned DEFAULT NULL,
	 `r_hide` int(11) DEFAULT '0',
	 `r_approve` int(11) DEFAULT '0',
	 `r_delete` int(11) DEFAULT '0',
	 `r_auth_del` int(11) DEFAULT NULL,
	 `r_hide_text` int(11) DEFAULT '0',
	 `r_archive_flag` int(11) DEFAULT '0',
	 `r_type` varchar(50) DEFAULT NULL,
	 PRIMARY KEY (`reply_id`)
	 ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'replies </h1></span></td><tr>';
	  
    /***
	  * @ fine table replies
	 */

	 
	 
	/***
	  * @table topics
	 */
	 mysql_query("drop table if exists ".TP."topics ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."topics` (
	 `cat_id` int(11) DEFAULT '0',
	 `forum_id` int(11) DEFAULT '0',
	 `topic_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `t_status` int(11) DEFAULT '0',
	 `t_subject` varchar(200) DEFAULT NULL,
	 `t_message` text,
	 `t_replies` int(11) DEFAULT '0',
	 `t_views` text,
	 `t_author` int(11) DEFAULT '0',
	 `t_date` int(10) unsigned DEFAULT NULL,
	 `t_lp_date` int(11) DEFAULT NULL,
	 `t_lp_author` int(11) DEFAULT NULL,
	 `t_archive` int(11) DEFAULT '1',
	 `t_archive_flag` int(11) DEFAULT '0',
	 `t_stick` int(11) DEFAULT '0',
	 `t_approve` int(11) DEFAULT '0',
	 `t_hide` int(11) DEFAULT '0',
	 `t_hide_text` int(11) DEFAULT '0',
	 `t_delete` int(11) DEFAULT '0',
	 `t_auth_del` int(11) DEFAULT NULL,
	 `t_top` int(11) DEFAULT '0',
	 `t_link` int(11) DEFAULT '0',
	 `t_survey` int(11) DEFAULT '0',
	 `t_newsletter` int(11) DEFAULT '0',
	 `t_hottopic` int(11) DEFAULT '0',
	 `t_mv` int(11) DEFAULT '0',
	 `t_keyWord` mediumtext NOT NULL,
	 PRIMARY KEY (`topic_id`)
	 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;
	 ") or die(mysql_error());
 	 mysql_query("
	 INSERT INTO `".TP."topics` (`cat_id`, `forum_id`, `topic_id`, `t_status`, `t_subject`, `t_message`, `t_replies`, `t_views`, `t_author`, `t_date`, `t_lp_date`, `t_lp_author`, `t_archive`, `t_archive_flag`, `t_stick`, `t_approve`, `t_hide`, `t_hide_text`, `t_delete`, `t_auth_del`, `t_top`, `t_link`, `t_survey`, `t_newsletter`, `t_hottopic`, `t_mv`, `t_keyWord`) VALUES
	 (1, 1, 1, 0, 'موضوع تجريبي لنسخة SAMKIT', 'السلام عليكم ورحمة الله&nbsp;<div>يسعدني كثيرا إستعمال برنامج المنتديات SAMKIT</div><div>تم برمجته بواسطة SAMSOL -- حبيب --&nbsp;</div><div>إي أستفسار أو مشكل يمكن التوجه على الروابط التالية</div><div><br></div><div>المنتديات&nbsp;<a href=\"http://www.star7arab.com/f.asp?f=103\">http://www.star7arab.com/f.asp?f=103</a></div><div><br></div><div>الفايس بوك :&nbsp;<a href=\"https://www.facebook.com/samsol.samsoli\">https://www.facebook.com/samsol.samsoli</a></div><div><br></div><div>أو زيارة الصفحة الرسمية&nbsp;</div><div><a href=\"https://www.facebook.com/samkit.script\">https://www.facebook.com/samkit.script</a></div><div><br></div><div>أو على الإميل&nbsp;</div><div>bellib@hotmail.fr</div>', 0, '::1| 0', 1, 1380446406, 1380446406, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'samscript');
	 ") or die(mysql_error()); 
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'topics </h1></span></td><tr>';
	  
    /***
	  * @ fine table topics
	 */

	 
	/***
	  * @table reply_status
	 */
	 mysql_query("drop table if exists ".TP."reply_status ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."reply_status` (
	 `status_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `status` int(11) DEFAULT '0',
	 `author` int(11) DEFAULT NULL,
	 `id` int(11) DEFAULT NULL,
	 `type` varchar(10) DEFAULT NULL,
	 `date` int(10) unsigned DEFAULT NULL,
	 PRIMARY KEY (`status_id`)
	 ) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'reply_status </h1></span></td><tr>';
	  
    /***
	  * @ fine table reply_status
	 */
	 
	 
	/***
	  * @table topic_status
	 */
	 mysql_query("drop table if exists ".TP."topic_status ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."topic_status` (
	 `status_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `status` int(11) DEFAULT '0',
	 `author` int(11) DEFAULT NULL,
	 `id` int(11) DEFAULT NULL,
	 `type` varchar(10) DEFAULT NULL,
	 `date` int(10) unsigned DEFAULT NULL,
	 PRIMARY KEY (`status_id`)
	 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'topic_status </h1></span></td><tr>';
	  
    /***
	  * @ fine table topic_status
	 */
	  
	  
		/***
	  * @table users
	 */
	 mysql_query("drop table if exists ".TP."users ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."users` (
	 `user_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
	 `u_name` varchar(30) DEFAULT NULL,
	 `u_login_name` varchar(30) DEFAULT NULL,
	 `u_pass` varchar(100) DEFAULT NULL,
	 `u_def_pass` varchar(100) DEFAULT NULL,
	 `u_email` varchar(100) DEFAULT NULL,
	 `u_country` varchar(50) DEFAULT NULL,
	 `u_level` int(10) DEFAULT '1',
	 `u_posts` int(10) DEFAULT '0',
	 `u_points` int(11) DEFAULT '0',
	 `u_reg_date` int(10) unsigned DEFAULT NULL,
	 `u_lh_date` int(10) unsigned DEFAULT NULL,
	 `u_lp_date` int(10) unsigned DEFAULT NULL,
	 `u_last_ip` varchar(25) DEFAULT NULL,
	 `u_ip` varchar(15) DEFAULT NULL,
	 `u_occupation` varchar(255) DEFAULT NULL,
	 `u_sex` varchar(50) DEFAULT NULL,
	 `u_age` varchar(10) DEFAULT NULL,
	 `u_online` int(10) DEFAULT '0',
	 `u_bio` text,
	 `u_sig` text,
	 `u_marstatus` varchar(100) DEFAULT NULL,
	 `u_city` varchar(100) DEFAULT NULL,
	 `u_state` varchar(100) DEFAULT NULL,
	 `u_photo_url` varchar(255) DEFAULT NULL,
	 `u_title` varchar(255) DEFAULT NULL,
	 `view` int(11) NOT NULL,
	 `u_color` varchar(211) DEFAULT NULL,
	 `u_browse` int(10) DEFAULT '1',
	 `u_face` varchar(200) DEFAULT 'BACKGROUND:#ffffff;BACKGROUND-IMAGE:;PADDING-LEFT:10px;PADDING-RIGHT:10px;PADDING-TOP:15px;PADDING-BOTTOM:15px;FONT-FAMILY:verdana;FONT-SIZE:16px;TEXT-ALIGN:right;COLOR:#000066;',
	 `u_allowmsg` int(10) DEFAULT '1',
	 `u_last_level` int(10) DEFAULT NULL,
	 `u_status` int(2) DEFAULT '1',
	 `u_color_choise` int(11) DEFAULT '1',
	 `u_skin` int(10) DEFAULT '0',
	 `u_opacity` int(11) DEFAULT '0',
	 `u_template` mediumtext,
	 `u_home_page` mediumtext,
	 `u_link1` mediumtext,
	 `u_link2` mediumtext,
	 `u_quote` mediumtext,
	 `u_hobbies` mediumtext,
	 `u_lnews` mediumtext,
	 PRIMARY KEY (`user_id`)
	 ) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;
	 ") or die(mysql_error());
 	 mysql_query("
 	 INSERT INTO `".TP."users` (`user_id`, `u_name`, `u_login_name`, `u_pass`, `u_def_pass`, `u_email`, `u_country`, `u_level`, `u_posts`, `u_points`, `u_reg_date`, `u_lh_date`, `u_lp_date`, `u_last_ip`, `u_ip`, `u_occupation`, `u_sex`, `u_age`, `u_online`, `u_bio`, `u_sig`, `u_marstatus`, `u_city`, `u_state`, `u_photo_url`, `u_title`, `view`, `u_color`, `u_browse`, `u_face`, `u_allowmsg`, `u_last_level`, `u_status`, `u_color_choise`, `u_skin`, `u_opacity`, `u_template`, `u_home_page`, `u_link1`, `u_link2`, `u_quote`, `u_hobbies`, `u_lnews`) VALUES
 	 (1, 'SAMSOL', 'SAMSOL', '0b3c44c259db6226c7099f84269abe85', 'c2Ftc29sMjAxMw==', 'bellib@hotmail.fr', '', 4, 1, 0, 1380445568, 1380446556, 1380446497, '::1', '::1', NULL, '1', '0', 1, NULL, NULL, NULL, '', '', NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
	 ") or die(mysql_error()); 
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'users </h1></span></td><tr>';
	  
    /***
	  * @ fine table users
	 */
	 
	/***
	  * @table ustitle
	 */
	 mysql_query("drop table if exists ".TP."ustitle ") or die(mysql_error());
	 
	 mysql_query("
	 CREATE TABLE IF NOT EXISTS `".TP."ustitle` (
	 `ut_id` int(55) NOT NULL,
	 `usr_id` int(55) NOT NULL,
	 `forum_id` int(55) NOT NULL,
	 `usr_titel` varchar(255) NOT NULL,
	 `t_dat` int(25) NOT NULL
	 ) ENGINE=MyISAM DEFAULT CHARSET=utf8;
	 ") or die(mysql_error());
	 
	 echo '<tr><td class="f1" id="click_h1"  >'.$Install_Sam['INSTALL_'].'ustitle </h1></span></td><tr>';
	  
    /***
	  * @ fine table ustitle
	 */
	  echo '<tr><td align="center" class="f1" id="REG_SAMSOL"  >'.$Install_Sam['ADMIN']. '</td><tr>';
?>	  