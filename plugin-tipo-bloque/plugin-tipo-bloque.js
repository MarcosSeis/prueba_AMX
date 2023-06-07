(function (blocks, editor, i18n, element, wp) {
    const el = element.createElement;
    const __ = i18n.__;
    const RichText = editor.RichText;
    const SelectControl = wp.components.SelectControl;
  
    blocks.registerBlockType('carso/tipo-bloque', {
      title: __('Bloque con Título y Descripción', 'carso'),
      icon: 'smiley',
      category: 'common',
      attributes: {
        title: {
          type: 'string',
          source: 'html',
          selector: 'h2',
        },
        description: {
          type: 'string',
          source: 'html',
          selector: 'p',
        },
        category: {
          type: 'string',
          default: '',
        },
      },
      edit: function (props) {
        const isPost = wp.data.select('core/editor').getCurrentPostType() === 'post';
  
        if (isPost) {
          const categories = [
            { label: 'Nacional', value: 'Nacional' },
            { label: 'Entretenimiento', value: 'Entretenimiento' },
            { label: 'Tecnología', value: 'Tecnología' },
            { label: 'Mascotas', value: 'Mascotas' },
            { label: 'Deportes', value: 'Deportes' },
          ];
  
          const categoryColors = {
            Nacional: '#00B049',
            Entretenimiento: '#FFC915',
            Tecnología: '#00D3F8',
            Mascotas: '#90456D',
            Deportes: '#FF372C',
          };
  
          const titleStyle = {
            backgroundColor: categoryColors[props.attributes.category] || '',
            color: '#fff',
          };
  
          return el(
            'div',
            null,
            el(SelectControl, {
              label: __('Categoría', 'carso'),
              value: props.attributes.category,
              options: categories,
              onChange: function (value) {
                props.setAttributes({ category: value });
              },
            }),
            el(RichText, {
              tagName: 'h2',
              value: props.attributes.title,
              onChange: function (content) {
                props.setAttributes({ title: content });
              },
              placeholder: __('Agrega un título', 'carso'),
              style: titleStyle,
            }),
            el(RichText, {
              tagName: 'p',
              value: props.attributes.description,
              onChange: function (content) {
                props.setAttributes({ description: content });
              },
              placeholder: __('Agrega una descripción', 'carso'),
            })
          );
        } else {
          return el(
            'div',
            null,
            el(RichText, {
              tagName: 'h2',
              value: props.attributes.title,
              onChange: function (content) {
                props.setAttributes({ title: content });
              },
              placeholder: __('Agrega un título', 'carso'),
              style: { color: '#000000' },
            }),
            el(RichText, {
              tagName: 'p',
              value: props.attributes.description,
              onChange: function (content) {
                props.setAttributes({ description: content });
              },
              placeholder: __('Agrega una descripción', 'carso'),
            })
          );
        }
      },
      save: function (props) {
        const isPost = wp.data.select('core/editor').getCurrentPostType() === 'post';

        if (isPost) {
            return el(
                'div',
                null,
                el(
                  'h2',
                  {
                    style: {
                      backgroundColor: props.attributes.category === 'Nacional' ? '#00B049' : (props.attributes.category === 'Entretenimiento' ? '#FFC915' : (props.attributes.category === 'Tecnología' ? '#00D3F8' : (props.attributes.category === 'Mascotas' ? '#90456D' : (props.attributes.category === 'Deportes' ? '#FF372C' : '')))),
                      color: '#fff',
                    },
                  },
                  props.attributes.title
                ),
                el(RichText.Content, {
                  tagName: 'p',
                  value: props.attributes.description,
                })
              );
        }else {
            return el(
                'div',
                null,
                el(
                  'h2',
                  {
                    style: {
                      backgroundColor: '#fff',
                      color: '#000000',
                    },
                  },
                  props.attributes.title
                ),
                el(RichText.Content, {
                  tagName: 'p',
                  value: props.attributes.description,
                })
              );
        }

      
      },
    });
  })(
    window.wp.blocks,
    window.wp.editor,
    window.wp.i18n,
    window.wp.element,
    window.wp
  );
  