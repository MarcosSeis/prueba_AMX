<?php 
/**
 * Plugin Name: Plugin de Wordpress de tipo bloque.
 * Description: Bloque de prueba para grupo CARSO.
 */

 function plugin_tipo_bloque_script_register()
 {
    wp_enqueue_script('plugin-tipo-bloque', plugin_dir_url(__FILE__).'plugin-tipo-bloque.js', array('wp-blocks', 'wp-i18n', 'wp-editor'), true, false);
 }

 add_action('enqueue_block_editor_assets', 'plugin_tipo_bloque_script_register');

?>