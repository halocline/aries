/* eslint-disable max-len */
import {
  AnchorPreview,
  BoxPreview,
  ButtonPreview,
  CheckBoxPreview,
  CheckBoxGroupPreview,
  DateInputPreview,
  FooterPreview,
  GridPreview,
  HeaderPreview,
  LayerPreview,
  MaskedInputPreview,
  MenuPreview,
  NameValueListPreview,
  RadioButtonGroupPreview,
  RangeInputPreview,
  SearchPreview,
  TabsPreview,
  TextAreaPreview,
  TextInputPreview,
} from '../../examples/cardPreviews';
import { SelectPreview } from '../../examples/components/select';
import { StackExample } from '../../examples/components/layouts';
import { TagPreview } from '../../examples/cardPreviews/tag';

export const components = [
  {
    name: 'Anchor',
    category: 'Controls',
    description: 'Hyperlinks used with text-based navigation, such as inline text.',
    seoDescription: 'Anchors are links in text-based navigation. See when to use a button vs. an anchor and accessibility best practices.',
    sections: [
      'Usage of Anchor vs. Button',
      'Anchor Labeling',
      'Inline Anchor',
      'Anchor to external site',
      'Anchor in a form',
      'Disabled Anchor',
      'Anchor with weight',
    ],
    preview: {
      component: () => <AnchorPreview />,
      background: 'background-front',
    },
    relatedContent: ['Button', 'Typography', 'Forms'],
    tags: ['hyperlinks', 'links', 'linking', 'navigation', 'anchors', 'buttons', 'accessibility standards for links', 'link labels'],
  },
  {
    name: 'Button',
    category: 'Controls',
    description: 'Buttons are graphic elements that indicate to users that actions can be performed.',
    seoDescription:
      'Buttons indicate that actions can be performed. See HPE styling for different states, colors, placement, etc.',
    relatedContent: ['Anchor', 'Menu', 'Tabs'],
    sections: [
      'About Button',
      'Button Labeling',
      'Button Alignment',
      'Buttons vs. Anchors',
      'Toggle Buttons',
      'Toggle Buttons with Icons',
      'Default Button',
      'Primary Button',
      'Secondary Button',
      'Toolbar Button',
      'Color Button',
      'Button with Icon',
      'Button States',
      'Button Sizes',
    ],
    preview: {
      component: () => <ButtonPreview />,
      background: 'background-front',
    },
    tags: ['buttons', 'actions', 'button style', 'hpe button styling', 'cancel button', 'delete button' 'button ux best practices', 'how to use a toggle', 'cta placement', 'call to action button'],
  },
  {
    name: 'Card',
    category: 'Layouts',
    description:
      'A container providing at-a-glance information and easy access to more details.',
    seoDescription:
      'Cards are a container providing at-a-glance information and easy access to more details. See when to use cards and alternatives.',
    preview: {
      image: {
        src: {
          light: '/templateImages/template-preview-cards.svg',
          dark: '/templateImages/template-preview-cards-invert.svg',
        },
        alt: 'HPE Cards Preview',
      },
    },
    relatedContent: ['Lists', 'Dashboards', 'Navigation'],
    sections: [
      'Principles',
      'Type of cards',
      'When to use',
      'When not to use',
      'Formatting',
      'Alignment',
      'Spacing',
      'Interactions',
      'Mouse',
      'Keyboard',
      'Accessibility',
      'Card titles',
      'Card sections',
    ],
    tags: ['tiles', 'widgets', 'containers', 'cards'],
  },
  {
    name: 'Call to action card',
    parentPage: 'Card',
    category: 'Layouts',
    description:
      'A call to action card should be used to entice the user down a desired path.',
    seoDescription:
      'Use a call to action card to entice the user down a desired path. See how HPE uses CTA cards and their anatomy.',
    preview: {
      image: {
        src: {
          light: '/templateImages/template-preview-cards.svg',
          dark: '/templateImages/template-preview-cards-invert.svg',
        },
        alt: 'HPE Cards Preview',
      },
    },
    relatedContent: ['Card', 'Lists', 'Dashboards'],
    sections: [
      'Example use cases',
      'Anatomy',
      'Presentation',
      'Examples',
      'Event promotion',
      'Event promotion (row-orientation)',
      'Feature update',
      'Trial promotion (background image)',
      'Trial promotion (row-orientation)',
      'Trial promotion (background color)',
      'Feature release',
    ],
    tags: ['tiles', 'widgets', 'containers', 'cards', 'when to use a card', 'call to action', 'cta button alternative', 'marketing cards', 'card sizes', 'hpe card colors', ],
  },
  {
    name: 'Navigational card',
    parentPage: 'Card',
    category: 'Layouts',
    description:
      'Navigational cards provide the user with a means of wayfinding.',
    seoDescription:
      'Navigational cards provide the user with a means of wayfinding. See examples of how HPE uses them with or without buttons.',
    preview: {
      image: {
        src: {
          light: '/templateImages/template-preview-cards.svg',
          dark: '/templateImages/template-preview-cards-invert.svg',
        },
        alt: 'HPE Cards Preview',
      },
    },
    relatedContent: ['Card', 'Lists', 'Dashboards'],
    sections: [
      'Anatomy',
      'Presentation',
      'Examples',
      'Single action',
      'Single action, no button',
      'Primary and secondary actions',
      'Row-orientation',
    ],
    tags: ['tiles', 'widgets', 'containers', 'cards', 'navigation', 'most frequent actions', 'most frequent functions', 'how to display cards', 'how to layout cards', 'site map', 'site map alternative',],
  },
  {
    name: 'Tabs',
    category: 'Controls',
    description:
      'Tabs are graphical elements usually arranged like column headings. They allow a user to access various sets of content without leaving their current page.',
    seoDescription:
      'Tabs allow a user to access various sets of content without leaving the page. See tab states, responsive behavior, and HPE standards for alignment, adding icons, etc.',
    sections: ['Tabs with icons', 'Tab states'],
    preview: {
      component: () => <TabsPreview />,
      background: 'background-front',
    },
    relatedContent: ['Button', 'Menu'],
    tags: ['tabs', 'tab panels', 'navigation', 'containers', 'tab alignment', 'responsive tabs', 'hpe tabs standards', 'hpe tabs style', 'tabs styling', 'tabs ux recommendations'],
  },
  {
    name: 'DateInput',
    category: 'Inputs',
    description:
      'A widget which allows the user to select a date or range of dates from a calendar.',
    seoDescription:
      'Calendar is a widget for selecing a date or range of dates. See how HPE indicates an error and best practices for labels.',
    relatedContent: ['Forms', 'TextInput', 'MaskedInput'],
    sections: [
      'When using Date Input, you should',
      'Single Date',
      'Date Range',
    ],
    preview: {
      component: () => <DateInputPreview />,
      background: 'background-front',
    },
    tags: [
      'date input',
      'date picker',
      'picker',
      'calendar',
      'calendar input',
      'select date',
      'select date range', 'HPE calendar component', 'hpe calendar widget'
    ],
  },
  {
    name: 'FileInput',
    category: 'Inputs',
    description: 'An input field where a user can select and upload one or more files.',
    seoDescription: 'FileInput is a field where a user can select and upload one or more files. See HPE UX standards for file size errors, multiple files, etc.',
    relatedContent: ['Forms', 'Select', 'TextInput', 'MaskedInput'],
    sections: ['FileInput with multiple files', 'FileInput within a Form'],
    preview: {
      image: {
        src: {
          light: '/componentImages/components-preview-fileinput.svg',
          dark: '/componentImages/components-preview-fileinput-invert.svg',
        },
        alt: 'HPE Design System FileInput',
        fit: 'contain',
      },
    },
    tags: [
      'input fields',
      'input types',
      'file input',
      'upload files',
      'file upload',
      'files',
      'error message',
      'deleting files',
      'file is too big',
      'fileinput styling'
      'fileinput standards'
      'selecting files'
    ],
  },
  {
    name: 'TextArea',
    category: 'Inputs',
    description:
      'TextArea is a field used in forms to capture longer text. This component provides the user with space to type more characters than the TextInput field.',
    seoDescription:
      'When you need to allow the user to provide longer forms of content, use a TextArea component.',
    sections: [],
    preview: {
      component: () => <TextAreaPreview />,
      background: 'background-front',
    },
    relatedContent: ['Forms', 'TextInput', 'MaskedInput'],
    tags: [
      'input fields',
      'input types',
      'large text',
      'text area',
      'text input',
      'description fields',
      'text boxes',
      'placeholder text'
      'input error'
    ],
  },
  {
    name: 'TextInput',
    category: 'Inputs',
    description:
      'TextInput is a field used in forms to capture short entries.',
    seoDescription:
      'The TextInput component allows the user to input shorter forms of data and content.',
    sections: [
      'About TextInput',
      'Password',
      'With suggestions',
      'Labeled by icon',
    ],
    preview: {
      component: () => <TextInputPreview />,
      background: 'background-front',
    },
    relatedContent: ['Forms', 'TextArea', 'MaskedInput'],
    tags: [
      'text input',
      'input type text',
      'text field',
      'password',
      'enter password'
      'search field'
      'short text field'
      'simple text field'
      'text field error message'
      ,
    ],
  },
  {
    name: 'Tip',
    category: 'Controls',
    description:
      'A Tip is a small layer that opens when the user moves the mouse pointer over an element. The intention is to offer helpful information in the immediate context.',
    seoDescription:
      'A Tip offers extra information when the user moves the mouse over an element. See when to use Tip.',
    sections: [
      'Truncation with Tip',
      'Truncated Table Cell Content',
      'Tip with icons',
      'Tip with exit',
      'Tip Content Length',
    ],
    preview: {
      image: {
        src: {
          dark: '/components-preview-tooltip-invert.svg',
          light: '/components-preview-tooltip.svg',
        },
        alt: 'HPE Tip preview',
      },
    },
    relatedContent: [
      'Layer',
      'Button',
      'Header',
      'Side to Side Navigation',
      'DataTable',
    ],
    tags: [
      'tooltip',
      'tool tip',
      'hover',
      'hover text',
      'hint',
      'truncation',
      'truncate',
      'pop-up',
      'help text',
      'dialog box'
      'small dialog'
      'informational pop-up'
      'contextual help'
      'on hover'
    ],
  },
  {
    name: 'Search',
    category: 'Controls',
    description: 'Search is a field that allows a user to input keywords for content they are looking for.',
    seoDescription: 'See HPE Design System Search input design and code examples.',
    sections: [
      'Placeholder',
      'Auto-suggestions',
      'Returning search results',
      'Search with Auto Suggestions',
      'Simple Search',
      'Icon Position',
    ],
    preview: {
      component: () => <SearchPreview />,
      background: 'background-front',
    },
    relatedContent: ['TextInput', 'Header'],
    tags: ['search input', 'search accessibility standards', 'auto-suggest in search', 'search suggestions', 'search placement', 'search icon'],
  },
  {
    name: 'Select',
    category: 'Inputs',
    description:
      'Select is a flexible input field that allows users to choose from a list of options. Also known as a drop-down field.',
    seoDescription:
      'The select input component offers users a choice from a list of options. See how HPE displays the disabled state, error messages, and alternatives to the drop-down.',
    sections: ['When to use Select', 'Multi-Select', 'Select with Search'],
    preview: {
      component: () => <SelectPreview />,
      background: 'background-front',
    },
    relatedContent: [
      'Forms',
      'Menu',
      'RadioButtonGroup',
      'CheckBox',
      'TextInput',
      'MaskedInput',
    ],
    tags: [
      'select options',
      'dropdown',
      'drop-down',
      'drop down',
      'option list',
      'multi select',
      'multiple values',
      'select error message',
      'drop-down alternatives',
      'drop-down error message',
      'disabled state'
      '
    ],
  },
  {
    name: 'SelectMultiple',
    category: 'Inputs',
    description:
      'SelectMultiple is a dropdown component that enables the user to quickly scan the list of options and choose more than one of the options.',
    seoDescription:
      'The SelectMultiple dropdown component allows users to choose one or more items from a list of options. See how HPE handles scrolling, adjusts the height, and where we place the search bar.',
    sections: [
      'When to use',
      'When not to use',
      'Anatomy',
      'Sizing & Scrolling',
      // 'Variants',
      // 'Other Use Cases',
      // 'Behavior',
      'Best Practices',
    ],
    preview: {
      component: () => <SelectPreview />,
      background: 'background-front',
    },
    relatedContent: [
      'Forms',
      'CheckBoxGroup',
      'Menu',
      'RadioButtonGroup',
      'CheckBox',
      'Select',
      'TextInput',
      'MaskedInput',
    ],
    tags: [
      'select options',
      'dropdown',
      'drop-down',
      'drop down',
      'option list',
      'multi select',
      'multiple values'
      'multiple options'
      'search in dropdown'
      'search in multiselect'
      'help text'
      'scrolling in dropdown',
    ],
  },
  {
    name: 'CheckBox',
    category: 'Inputs',
    description:
      'CheckBox is a square design element that when clicked accepts the choice offered.',
    seoDescription:
      'Checkbox component for HPE Design System. UX usage examples and guidance on how to ensure a checkbox maintains accessiblity.',
    sections: [
      'CheckBox outside of FormField',
      'Toggle',
      'CheckBox with Description',
    ],
    relatedContent: ['CheckBoxGroup', 'Forms', 'RadioButtonGroup', 'Select'],
    preview: {
      component: () => <CheckBoxPreview />,
      background: 'background-front',
    },
    tags: ['check box', 'toggle', 'input type', 'indeterminate' 'multiple choices checkbox', 'checkbox states', 'hpe checkbox styling', 'checkbox vs toggle', 'error message',],
  },
  {
    name: 'CheckBoxGroup',
    category: 'Inputs',
    description:
      'CheckBoxGroup is a component that presents related checkbox options.',
    seoDescription:
      'CheckBoxGroup component for HPE Design System. See checkbox in disabled state, accessiblity standards, and best UX practices.',
    sections: ['With options as array of objects', 'Scroll'],
    relatedContent: ['Forms', 'RadioButtonGroup', 'CheckBox', 'Select'],
    preview: {
      component: () => <CheckBoxGroupPreview />,
      background: 'background-front',
    },
    tags: ['checkbox', 'checkbox group', 'check box group', 'grouped', 'checkbox error message,' 'checkbox group accessibility', 'checkbox scrolling', ],
  },
  {
    name: 'Accordion',
    category: 'Controls',
    description: 'The accordion is a menu list that when clicked opens to reveal more options.',
    preview: {
      image: {
        src: {
          light: '/component-preview-accordion.svg',
          dark: '/component-preview-accordion-invert.svg',
        },
        alt: 'HPE Accordion Preview',
        fit: 'contain',
      },
    },
    relatedContent: ['Layer', 'Lists', 'Tabs'],
    seoDescription:
      'The accordion is a menu list that when clicked opens to reveal more options. See different behaviors, states, and icons.',
    sections: ['About Accordion'],
    tags: ['accordian', 'acordion', 'collapse', 'panel', 'expand', 'expandable menu', 'menu alternatives', 'menu styles', 'havigation elements', 'navigation alternatives,'],
  },
  {
    name: 'Header',
    category: 'Layouts',
    description:
      'Header is a Box with a set of preset properties for introductory content. It is placed prominently at the top of a page to provide context.',
    seoDescription:
      'Header is a Box with a set of preset properties for introductory content.',
    sections: [
      'About Header',
      'Application Header',
      'Page Header',
      'Header with navigation buttons',
      'Header with main action',
      'Header with search',
      'Header with avatar',
      'Header with search and actions',
      'Header for a single page',
    ],
    preview: {
      component: () => <HeaderPreview />,
      justify: 'start',
    },
    relatedContent: ['Button', 'Menu', 'TextInput', 'Dashboards', 'Search'],
    tags: ['app headers', 'navigation', 'page sections', 'page layouts', 'header vs global header', 'logo placement', 'hpe header', 'avatar placement', 'navigation pane', 'search placement',],
  },
  {
    name: 'Footer',
    category: 'Layouts',
    description:
      'Footer is a Box with a set of preset properties. It is usually placed at the bottom of the page, which makes it predictable for users to find certain information or actions.',
    seoDescription:
      'Footer is a Box with a set of preset properties, usually at the bottom of a page. See what information and links HPE places in our footers.',
    sections: [
      'Application Footer',
      'Page Footer',
      'Footer for a single page',
      'App footer with page footer',
    ],
    preview: {
      component: () => <FooterPreview />,
      justify: 'end',
    },
    relatedContent: ['Header', 'Button', 'Dashboards'],
    tags: ['app footers', 'navigation', 'page sections', 'page layouts' 'necessary page elements', 'landmarks', 'page regions', 'page footer vs app footer', 'hpe footer standards'],
  },
  {
    name: 'Menu',
    category: 'Controls',
    description:
      'Menu is a component that contains a list of actions. When a user clicks an item in the menu, the menu closes and the action is executed.',
    seoDescription:
      'Menu contains a list of actions. See some best UX practices .',
    sections: ['organizing menu items', 'dangerous actions', 'commmon action groupings' 'hpe applications', 'menu within a header', 'menu within a toolbar', 'menu with a custom icon' ],
    preview: {
      component: () => <MenuPreview />,
      background: 'background-front',
    },
    relatedContent: ['Header', 'Dashboards', 'Select'],
    tags: ['dropdown', 'drop down', 'actions', 'navigation', 'cascading menu', 'hpe menu styling', 'destructive actions', 'menu items', 'menu actions' 'types of actions', 'hpe menu icon' ],
  },
  {
    name: 'Box',
    category: 'Layouts',
    description:
      'Boxes are containers that drive the layout of your content. Flexible props allow the behavior of content to be defined to optimize the user experience.',
    seoDescription:
      'Box are containers that drive the layout of your content. See example code for HPE style boxes.',
    sections: [],
    preview: {
      component: () => <BoxPreview />,
      background: 'background-front',
    },
    tags: ['sections', 'containers', 'content containers', 'layout', 'flexbox'],
  },
  {
    name: 'Grid',
    category: 'Layouts',
    description: `Grid is a component based on columns and rows used for organizing layouts. From scaffolding page layouts, to organizing elements within 
    a Card, Grid is a powerful tool for composing responsive, adaptive layouts.`,
    preview: {
      component: () => <GridPreview />,
      background: 'background-front',
    },
    seoDescription: `Grids are a layout's best friend. From scaffolding page layouts to organizing elements within 
    a Card, Grid is a powerful tool for composing responsive, adaptive layouts.`,
    sections: ['grid properties and key concepts', 'grid columns', 'grid rows', 'grid gaps', 'implementing grid', 'fluid grids'],
    tags: [
      'layouts',
      'page layouts',
      'responsive layout',
      'CSS grid',
      'content layouts',
      'hpe grids',
      'hpe layout styles',
      'flexible grid',
      'card dashboard',
      'card alternative',
      'grid alternative',
      'different size columns',
      'varying columns',
      'multiple columns',
      'responsive grid',
      'responsive columns',
      'hpe column dimensions',
    ],
    relatedContent: ['Content Layouts', 'Page Layouts', 'Box'],
  },
  {
    name: 'Layer',
    category: 'Layouts',
    description:
      'Layer is component that displays content on top of the page the user is currently on. Examples of uses of layers include modals, dialogs, and notifications.',
    previewComponent: {
      component: () => <LayerPreview />,
    },
    seoDescription:
      'Layer is component that displays content on top of the page the user is currently on. See how HPE implements side panels, center modals, dialogs, etc.',
    sections: ['Using Headings in Layer', 'Side Drawer Modal', 'Center Modal', 'Layer form within header', 'layer form with hide/show sticky header',],
    preview: {
      component: () => <LayerPreview />,
    },
    relatedContent: ['Forms', 'Button', 'Icons'],
    tags: [
      'slideout',
      'panels',
      'drawers',
      'modals',
      'side panel',
      'side drawer',
      'drop',
      'z-index',
      'dialog boxes',
      'overlay',
      'dialog layer',
      'accessibility standards layers',
    ],
  },
  {
    name: 'Main',
    category: 'Layouts',
    description:
      'The Main component is where you define the location and layout of the primary context of your content.',
    seoDescription:
      'The Main component is where you define the location and layout of the primary context of your content.',
    sections: [],
    relatedContent: ['Header', 'Footer', 'Grid', 'Box'],
    tags: ['layouts', 'page sections', 'header', 'footer', 'page', 'table placement', 'summmary placement',],
  },
  {
    name: 'MaskedInput',
    category: 'Inputs',
    description:
      'MaskedInput allows you to specify formatted text within a form field.',
    seoDescription:
      'MaskedInput allows you to specify formalized text within a form field.',
    sections: [
      'IP Address',
      'IP Range',
      'Size with units',
      'Email',
      'Time',
      'Date',
    ],
    preview: {
      component: () => <MaskedInputPreview />,
      background: 'background-front',
    },
    relatedContent: ['TextInput', 'Forms', 'Select', 'DateInput'],
    tags: [
      'input mask',
      'edit mask',
      'formatted input',
      'entry format',
      'input format',
      'format',
      'data entry',
      'validation',
      'form validation',
      'form inputs',
      'placeholder text',
      'pre-filled'
      'use-cases for preformatted text'
      'preformatted text',
      'preformatted form fields'
    ],
  },
  {
    name: 'NameValueList',
    category: 'Visualizations',
    description: 'A NameValueList displays a group of NameValuePairs.',
    seoDescription: 'A NameValueList displays a group of NameValuePairs.',
    preview: {
      component: () => <NameValueListPreview />,
      background: 'background-front',
    },
    sections: [
      'Anatomy of a NameValuePair',
      'Hierarchy',
      'Order',
      'Heading',
      'Scale',
      'Font weight',
      'Name-Value Aligment',
      'Controlling Name-Value Width',
      'Name-Value Pair with Empty Value',
      'When To Display “Empty value” Name-Value Pairs',
      'When To Omit “Empty value” Name-Value Pairs',
      'Accessibility for Name-Value Pairs with Empty Value',
    ],
    relatedContent: ['Grid', 'DataTable', 'Lists'],
    tags: [
      'name',
      'value',
      'scale',
      'pairings',
      'key-value',
      'key-value pairs',
      'description list',
      'dl',
      'description term',
      'dt',
      'description detail',
      'dd',
      'read-only input',
      'readonly',
      'read only',
      'key',
      'property list',
    ],
  },
  {
    name: 'Notification',
    category: 'Visualizations',
    description:
      'Notifications are messages that pop up about in the moment that there is a change or a failure that the user should be made aware of.',
    preview: {
      image: {
        src: {
          light: '/templateImages/template-preview-notifications.svg',
          dark: '/templateImages/template-preview-notifications-invert.svg',
        },
        alt: `Image featuring a bell icon and indicator representing how a timely notification 
        might be presented to a user within an application.`,
        fit: 'contain',
      },
    },
    seoDescription: `Notifications in the HPE Design System provides patterns,
    designs, and guidance for how HPE applications can deliver end users 
    confidence and assurance by keeping them informed with timely, relevant 
    status of their systems and tasks.`,
    sections: [
      'State v.s. Status',
      'Notification Systems',
      'Toast Notification',
      'Global Banner Notification',
    ],
    relatedContent: [
      'Status Indicator',
      'Toast Notifications',
      'Global Banner Notifications',
      'Stack',
    ],
    tags: [
      'banner',
      'toast',
      'alert',
      'badge',
      'system notification',
      'global notification',
      'inline notification',
      'success message',
      'status message',
      'notification center',
      'taxonomy',
      'ticker',
      'pop-up',
      'message'
      'messaging'
      'push notification'
      'warnings',
      'error message'
      'failure message'
      'red alert'
      'notification system',
      'alert alternatives',
    ],
  },
  {
    name: 'RadioButtonGroup',
    category: 'Inputs',
    description:
      'RadioButtonGroup is a component that offers related options to a user, but only allows them to choose one.',
    seoDescription:
      'The RadioButtonGroup component is used when you want the user to choose only one out of a set of related options. See best UX practices, error messages, and how HPE styles the disabled state.',
    sections: ['When to use RadioButtonGroup'],
    preview: {
      component: () => <RadioButtonGroupPreview />,
      background: 'background-front',
    },
    relatedContent: ['CheckBoxGroup', 'Select', 'Forms'],
    tags: ['grouped radio button', 'radio button group', 'radio button', 'checkbox alternative', 'radio button vs checkbox', '],
  },
  {
    name: 'RangeInput',
    category: 'Inputs',
    description:
      'The RangeInput component is a slider control that provides a handle the user can move along a continuum to select a value.',
    seoDescription:
      'The RangeInput component is a slider control that provides a handle the user can move to make changes to values. See HPE styling and example code.',
    sections: [],
    preview: {
      component: () => <RangeInputPreview />,
      background: 'background-front',
    },
    tags: ['slider', 'slider input', 'volume control', 'range input', 'value selector', 'choices alternatives', 'choosing numbers', 'continuum', 'choosing a value',],
  },
  {
    name: 'Stack',
    category: 'Layouts',
    description:
      'A Stack component is a container that stacks content on top of each other.',
    preview: {
      component: () => <StackExample />,
      background: 'background-front',
    },
    seoDescription:
      'A Stack component is a container that stacks content on top of each other. See HPE styling and example code.',
    sections: [],
    tags: ['containers', 'layers', 'z-index',],
  },
  {
    name: 'Spinner',
    category: 'Visualizations',
    description: 'Spinner is a small motion graphic element that indicates a loading state for quick, asynchronous tasks.',

    preview: {
      image: {
        src: {
          light: '/components-preview-spinner.svg',
          dark: '/components-preview-spinner-invert.svg',
        },
        alt: 'HPE Spinner preview',
      },
    },
    seoDescription: 'Spinner is a motion graphic element loading state for quick asynchronous tasks.',
    relatedContent: ['Lists', 'DataTable', 'Forms'],
    sections: [
      'When to use Spinner',
      'Spinner within a list',
      'Spinner with announcement on screen reader',
      'Spinner loading content',
    ],
    tags: [
      'loading',
      'loading indicator',
      'transition',
      'pinwheel',
      'waiting',
      'throbber',
      'spinning wheel',
      'progress indicator',
      'progress bar',
      'splash screen'
      'loading icon'
      'hpe spinner icon'
      'progress indicator alternative'
      'hpe style spinner'
      'hpe loading spinner'
      'spooling'
      ,
    ],
  },
  {
    name: 'DataTable',
    category: 'Visualizations',
    description: 'DataTable presents data in a column and row format.',
    preview: {
      image: {
        src: {
          light: '/componentImages/component-preview-table.svg',
          dark: '/componentImages/component-preview-table-invert.svg',
        },
        alt: 'HPE Tables Preview',
        fit: 'contain',
      },
    },
    relatedContent: ['Filtering', 'Lists', 'Card', 'Pagination'],
    seoDescription: 'Data presentation in column and row format.',
    sections: [
      'What makes up a DataTable',
      'Finding a specific record',
      'Narrowing a result set',
      'Browsing a result set',
      'Assembling a data set',
      'Setting the width of a DataTable',
      'Wrapping and truncating',
      'Truncation',
      'Options for Positioning Truncation',
      'Wrapping',
      'DataTable behaviors and actions',
      'Sorting',
      'Resizeable columns',
      'Searching and filtering DataTables',
      'Status vs. state',
      'Navigation via DataTable',
      'Selecting multiple records & batch actions',
      'Paginated',
      'Fixing header row and/or columns',
      'Column summaries & aggregation',
      'Use pagination or infinite scroll with DataTables',
      'Handling Empty Cells',
    ],
    tags: [
      'data table',
      'sorting columns',
      'sort data',
      'filtering',
      'colums',
      'rows',
      'tables',
      'truncation',
      'informational table',
      'table summary'
      'best table width for a screen'
      'how to wrap in datatable',
      'no value datatable',
      'not applicable datatable'
      'icons in datatables',
      'datatable responsive',
      'flexible columns',
      'custom sizing columns',
      'checkboxes datatable',
      'multiple pages datatable',
      'totaling in datatable',
      'totals in tables',
      'scrolling tables',
      'scrolling vs pagination',
      ,
    ],
  },
  {
    name: 'Pagination',
    available: true,
    category: 'Controls',
    description: `Pagination divides content into separate pages in order to 
    enhance navigation to specific items.`,
    preview: {
      image: {
        src: {
          light: '/componentImages/component-preview-pagination.svg',
          dark: '/componentImages/component-preview-pagination-invert.svg',
        },
        alt: 'HPE Design System Pagination',
        fit: 'contain',
      },
    },
    seoDescription: `Pagination divides content into separate pages in order to 
    enhance navigation to specific items. `,
    sections: [
      'When to use Pagination',
      'Number of results per page',
      'Placement of pagination component',
      'Showing summary of results',
      'Paginated Table',
      'Paginated List',
      'Paginated Cards',
    ],
    relatedContent: ['DataTable', 'Lists', 'Card'],
    tags: ['paginated results', 'paginated data', 'multiple pages', 'scrolling alternatives', 'long pages', 'hpe pagination styling', 'accessibility standards for pagination', 'pagination aria labels', ],
  },
  {
    name: 'Tag',
    available: true,
    category: 'Visualizations',
    description: `Tags are metadata keywords facilitating the identification, 
    organization, searching, and filtering of resources.`,
    preview: {
      component: () => <TagPreview />,
      background: 'background-front',
    },
    seoDescription: `Tags are metadata keywords that facilitate identification, 
    organization, searching, and filtering resources. See HPE tag styling and how we create and assign tags.`,
    sections: [
      'Guidance',
      'Anatomy',
      'Remove Button',
      'Background Color',
      'Name-Value Pair Tags',
      'Creating Name-Value Pair Tags',
      'Assigning Tags',
      'Assigning Value-only Tags',
      'Assigning Name-Value Tags',
      'Filtering with Tags',
      'Filtering with Tags on a Detail Page',
      'Filtering with Tags on a Summary Page',
    ],
    relatedContent: ['NameValueList', 'Lists'],
    tags: ['tags', 'name value pair', 'metatags', 'metadata', 'keywords', 'assigning keywords', 'filtering by keywords', 'adding tags', 'tag creation',],
  },
  {
    name: 'Page',
    available: true,
    category: 'Layouts',
    description: `Page is a helpful container providing consistent layouts
     across all HPE applications.`,
    preview: {
      image: {
        src: {
          light: '/componentImages/component-preview-page.svg',
          dark: '/componentImages/component-preview-page-invert.svg',
        },
        alt: 'HPE Page Preview',
        fit: 'contain',
      },
    },
    seoDescription: `Page is a container providing consistent layouts across HPE apps. See examples of standard HPE page sizes and their use cases.`,
    sections: ['Guidance', 'Page Content'],
    relatedContent: ['Page Layouts', 'Content Layouts', 'Box', 'Main'],
    tags: ['page', 'page content', 'hpe page layout', 'hpe standard page', 'page basics', 'page sizing',],
  },
  {
    name: 'PageHeader',
    available: true,
    category: 'Layouts',
    description:
      "A component providing users a consistent, predictable location for the page title, contextual navigation, and actions across all HPE applications. Usually placed at the top of the page.",
    preview: {
      image: {
        src: {
          light: '/componentImages/component-preview-pageheader.svg',
          dark: '/componentImages/component-preview-pageheader-invert.svg',
        },
        alt: 'HPE PageHeader Preview',
        fit: 'contain',
      },
    },
    seoDescription: `PageHeader is a component providing users a predictable location for the page title, contextual navigation, and actions. See the obligatory elements, responsiveness, best UX practices.',

    sections: [
      'Anatomy',
      'Responsive Behavior and Content Prioritization',
      'Title',
      'Subtitle',
      'Reverse Anchor',
      'Example of Child Page',
      'Example of Top-Level Page',
      'Page-Level Actions',
      'Responsive Behavior of Actions',
    ],
    relatedContent: ['Page Layouts', 'Content Layouts', 'Page'],
    tags: ['page header', 'header', 'page', 'hpe pageheader', 'hpe header styling', 'header ux best practices', 'actions in a header', 'responsive pageheader',],
  },
  {
    name: 'All Components',
    available: true,
    category: 'All',
    description:
      'Grommet components are the building blocks of the HPE Design System.',
    preview: {
      image: {
        src: {
          light: '/components-light.svg',
          dark: '/components-dark.svg',
        },
        alt: 'Purple playing cards representing HPE Design System components',
        fit: 'contain',
      },
    },
    seoDescription: 'See all HPE Design System and Grommet components, from scrolling, diagram, carousel, calendar, data chart, maskedinput, etc.',
    sections: [
      'Sidebar',
      'Markdown',
      'Drop',
      'RangeSelector',
      'Avatar',
      'Calendar',
      'Clock',
      'DataChart',
      'Diagram',
      'Meter',
      'WorldMap',
      'Media',
      'Carousel',
      'Image',
      'Video',
      'Utilities',
      'AnnounceContext',
      'Collapsible',
      'Grommet',
      'InfiniteScroll',
      'Keyboard',
      'ResponsiveContext',
      'SkipLinks',
      'ThemeContext',
    ],
    relatedContent: [],
  },
];
