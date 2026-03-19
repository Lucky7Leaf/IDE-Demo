import { BusinessRule } from '@servicenow/sdk/core'

BusinessRule({
    $id: Now.ID[0], //a6c9f040be78428db1165361d403a513
    name: 'Record created message',
    table: 'x_153639_demo_ide_leaf_table',
    when: 'after',
    action: ['insert'],
    active: true,
    addMessage: true,
    message: 'you created a leaf case',
    description: 'Displays a message when leaf case is created'
})