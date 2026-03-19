import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    //DateColumn,
    //BooleanColumn
} from '@servicenow/sdk/core'

export const x_153639_demo_ide_leaf_table = Table({
    // Required fields only
    name: 'x_153639_demo_ide_leaf_table',
    label: 'leaf table',
    extends: 'x_153639_demo_ide_branch_table',
    extensible: false,
    schema: {
        leafstring: StringColumn({ 
            label: 'Leaf string',
            maxLength: 1000,
            mandatory: true,
            active: true,
        }),
    },
})
