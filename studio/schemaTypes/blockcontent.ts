import {defineType, defineArrayMember} from 'sanity'
import {LinkIcon, ImageIcon} from '@sanity/icons'

/**
 * This is the schema definition for the rich text fields used for blog posts.
 * It's important to note that you can extend this schema with more custom blocks.
 * https://www.sanity.io/docs/portable-text-specification
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what's in the dropdown box for the different styles like headings
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}, {title: 'Numbered', value: 'number'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators render inline text styles
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Code', value: 'code'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike-through'},
        ],
        // Annotations can be any object that's added to the text
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            icon: LinkIcon,
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add custom objects to the array, like an image
    defineArrayMember({
      type: 'image',
      icon: ImageIcon,
      options: {hotspot: true},
    }),
  ],
})
