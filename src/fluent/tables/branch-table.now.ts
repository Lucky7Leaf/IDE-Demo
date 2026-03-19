import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    DateColumn,
    BooleanColumn
} from '@servicenow/sdk/core'

export const x_153639_demo_ide_branch_table = Table({
    // Required fields only
    name: 'x_153639_demo_ide_branch_table',
    label: 'branch table',
    extends: 'sn_customerservice_case',
    extensible: true,
    autoNumber: {
        prefix: 'BRA',
        number: 1000,
        numberOfDigits: 9,
    },
    schema: {
        branchstring: StringColumn({ 
            label: 'Branch string',
            maxLength: 1000,
            mandatory: true,
            active: true,
        }),
        branchdate: DateColumn({
            label: 'Branch date',
            mandatory: true,
            active: true,
        }),
        branchboolean: BooleanColumn({
            label: 'Branch boolean',
        }),
    },
})
