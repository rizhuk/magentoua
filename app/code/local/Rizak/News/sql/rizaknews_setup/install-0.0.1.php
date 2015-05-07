<?php

die('DS News module setup');

$installer = $this;
$installer->startSetup();
$installer->run("CREATE TABLE ds_news_entities (
        `news_id` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(255) NOT NULL,
        `content` TEXT NOT NULL,
        `created` DATETIME,

        PRIMARY KEY (`news_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;");

$installer->endSetup();<?php
/**
 * Created by PhpStorm.
 * User: rizak
 * Date: 07.05.15
 * Time: 17:07
 */