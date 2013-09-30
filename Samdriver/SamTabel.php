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
 
 
     /*
	    to selcet all filed of the table in => parent::$FILED['CAT']
	 */
     $SamFailed = Array(
	             
         'CAT'   => array(
		         
				 '`c_id`','`c_status`','`c_name`','`c_order`','`c_level`','`c_site`','`c_hide`'
				 
				 ),
      
         'FRM'  => array(
		         
				 '`cat_id`','`f_id`','`f_status`','`f_name`','`f_desc`','`f_topics`','`f_replies`','`f_lp_date`','`f_lp_author`','`f_order`',
				 '`f_sex`','`f_top_day`','`f_rep_day`','`f_level`','`f_hide`','`f_approve`','`f_sig`','`f_photo`','`f_approve2`',
				 '`t_lockreply`','`f_extra`','`f_mon`','`f_mon_date`','`f_mon_hide`','`f_archive`','`f_onlinef`','`change_rep`','`change_top`'
				 
				) ,
		 
         'USER'  => array(
		         
				'`user_id`',' `u_name`', '`u_login_name`', '`u_pass`', '`u_def_pass`', '`u_email`',' `u_country`', '`u_level`', '`u_posts`',
				'`u_points`',' `u_reg_date`', '`u_lh_date`', '`u_lp_date`',' `u_last_ip`', '`u_ip`', '`u_occupation`', '`u_sex`',' `u_age`',
				'`u_online`', '`u_bio`', '`u_sig`', '`u_marstatus`', '`u_city`', '`u_state`', '`u_photo_url`', '`u_title`', '`view`', '`u_color`', '`u_browse`',
				'`u_face`', '`u_allowmsg`', '`u_last_level`', '`u_status`', '`u_color_choise`', '`u_skin`',' `u_opacity`','`u_template`','`u_home_page`','`u_link1`','`u_link2`' 
				,'`u_quote`' ,'`u_lnews`','`u_hobbies`' 
				 
			    ),
				
		 'TPC'  => array(
		         
				 '`cat_id`','`forum_id`','`topic_id`','`t_status`','`t_subject`','`t_message`','`t_replies`','`t_views`','`t_author`','`t_date`','`t_lp_date`'
				 ,'`t_lp_author`','`t_archive`','`t_archive_flag`','`t_stick`','`t_approve`','`t_hide`','`t_hide_text`','`t_delete`','`t_auth_del`'
				 ,'`t_top`','`t_link`','`t_survey`','`t_newsletter`','`t_hottopic`','`t_mv`' ,'`t_keyWord`'
				 
				 ),
		 'MODS' => array(
		 
		          '`mod_id`','`f_id`','`u_id`','`hide_mod`','`mod_date`' 
		 
		       ),
		 'REP'  => array(
		 
		 '`cat_id`', '`forum_id`',' `topic_id`',' `reply_id`', '`r_author`', '`r_message`', '`r_date`',' `r_hide`', '`r_approve`', '`r_delete`', 
		 '`r_auth_del`', '`r_hide_text`', '`r_archive_flag`', '`r_type`'
		 
		       ),
			   
		 'TOPST'  => array(
		 
		    '`status_id`', '`status`', '`author`', '`id`', '`type`',' `date`'
		          ),
		 'USRTITLE' => array(
		 
		    '`ut_id`' ,'`usr_id`' ,'`forum_id`' ,'`usr_titel`' ,'`t_dat`'
		        ),
				
		 'CHNGE'  => array(
		 
		 '`id`', '`user_id`', '`post_id`', '`post_type`', '`change_subject`', '`change_message`', '`subject`', '`message`', '`date`'
		 
				),
				
		 'OLN' => array(
		 
		    '`o_id`', '`o_main`', '`o_frm`',' `o_top`', '`o_ip`',' `o_dat`', '`o_uid`'
		 ),
		 
		 'MEDALES_F' => array(
		 
		 '`m_id`' ,'`m_uid`' ,'`m_date`' ,'`m_countent`','`m_type`' ,'`m_size`'
		 
		 ),
		 
		 'KEY_WORD'  => array(
		 
		    '`k_id`' ,'`k_cat_id`' ,'`k_word`'
		 
		 ),
		 'MSG'     => array(
		 
		 
		 '`m_id`', '`m_from_uid`', '`m_to_uid`',' `m_title`',' `m_msg`', '`m_dat`', '`m_hide`'
		 
		 )
				
				);









