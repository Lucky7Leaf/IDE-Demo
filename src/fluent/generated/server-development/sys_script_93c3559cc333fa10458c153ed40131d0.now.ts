import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID['93c3559cc333fa10458c153ed40131d0'],
    name: 'Before leaf insert message',
    table: 'x_153639_demo_ide_leaf_table',
    when: 'before',
    action: ['insert'],
    message: '<p>I am creating the case don&#39;t worry...</p>',
    addMessage: true,
})
