import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0': {
                        table: 'sys_script'
                        id: 'a6c9f040be78428db1165361d403a513'
                    }
                    AppRoleBuilder: {
                        table: 'sys_script_include'
                        id: '56d85ee102b34c4baefdd52ce1ec70eb'
                        deleted: true
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '37d9cb50f665482faee794c51cb34942'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '8ce9d7666626448bbc3490e57ad87573'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '69f29811e71544c68e7638105f79df35'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '34e7f14a45fc482a96426459ae2eb351'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: 'bd5e197dd2a34d8fa262e329bc31ba50'
                    }
                    'src_server_script-includes_app-role-builder_js': {
                        table: 'sys_module'
                        id: '220b01f43b094a6e826e20186c40b7c5'
                        deleted: true
                    }
                }
                composite: [
                    {
                        table: 'sys_user_role_contains'
                        id: '0355398c2c324118966c1c241097e6d0'
                        deleted: true
                        key: {
                            role: {
                                id: 'f49ed84a08f346058aae01f6b60ff2a8'
                                key: {
                                    name: 'x_153639_demo_ide.demo_manager'
                                }
                            }
                            contains: {
                                id: '0bf8a160a5a247308e1c8c879fb7cf0f'
                                key: {
                                    name: 'x_153639_demo_ide.demo_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '06d089f124634526affa853e597ecad3'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'branchstring'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '0bf8a160a5a247308e1c8c879fb7cf0f'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide.demo_user'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '177b0b794d054830924301f0081a0de2'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'notes'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '185aa2304da84e14b0d902fdc368876c'
                        key: {
                            category: 'x_153639_demo_ide_branch_table'
                            prefix: 'BRA'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '18bb52e50de94362ae9752f328218042'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '18c60f7fce914d2dbd1c339f4c56585b'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1f8a18bf26774110b48b30a4d3d96829'
                        key: {
                            name: 'x_153639_demo_ide_leaf_table'
                            element: 'leafstring'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '26bfb50c111c4e26968cfdc176b16145'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '35425000ccbe4c0db5f7dbcf8faffb40'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'title'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '3c8bd3825ec747c5b9b1725adc2d1eb4'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'branchdate'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4ee60c43b3174d1c84c8e357ac059c05'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '4f34f59961e24bb7a5c6e0e4a5b541a8'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'status'
                            value: 'open'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '50d3f610550b44cb967df57eb2f9479b'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '59d8d214abf94395ac721e99063f4bd8'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'branchboolean'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5d64616d2f3c4bef9e8bcb09d9bd399f'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'is_urgent'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '66834ddfaa334661a400a7fab5b61c7e'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'branchdate'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '67dce45472da43089f3938155cb27612'
                        key: {
                            name: 'x_153639_demo_ide_leaf_table'
                            element: 'leafstring'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '73a711318bf648b2b6723148abb87304'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '7423c4b936be4c09a8786f9f619b61d3'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '7f9cbb90aa8b451da652c70b041504c6'
                        key: {
                            name: 'x_153639_demo_ide_leaf_table'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: '831e20361a694a37804836a2de1219bc'
                        deleted: true
                        key: {
                            role: {
                                id: 'c697eb84d512434bb331dc3480ee7279'
                                key: {
                                    name: 'x_153639_demo_ide.demo_admin'
                                }
                            }
                            contains: {
                                id: '0bf8a160a5a247308e1c8c879fb7cf0f'
                                key: {
                                    name: 'x_153639_demo_ide.demo_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '83391dc1a5924a2cb97ecffffe668b9f'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8c6b3ebde7374e2b9555b907f81b2370'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '8cf1fc7bd622416fa93d7f3bc33ffacc'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'is_urgent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '911b3e42e6774ab2a3bc0adcd0d8d0c8'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a3332aacc8ae47d2b787a21db5b7f4d5'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a574b159a62742dd8a192aa49629d0b1'
                        key: {
                            name: 'x_153639_demo_ide_leaf_table'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a96af6ab9dbf447abf5014a2b9e8557f'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'branchboolean'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'acdcdfd069f045688a577c0d24642e91'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb0f4cc75fda46a59f0a192911bd8b0c'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'status'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'bfaeb2c357364d45913645b8afa83d27'
                        key: {
                            name: 'x_153639_demo_ide_leaf_table'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c697eb84d512434bb331dc3480ee7279'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide.demo_admin'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'd40f23cd8c424573b651640f315ccb4c'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd7c3417ad09c4d4d986aa0c207341a57'
                        key: {
                            name: 'x_153639_demo_ide_leaf_table'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da1af96909e948739bfd1d48fb60d1d6'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'title'
                        }
                    },
                    {
                        table: 'sys_user_role_contains'
                        id: 'e982c92fe3d34cb9ac1fc29b562a9e49'
                        deleted: true
                        key: {
                            role: {
                                id: 'c697eb84d512434bb331dc3480ee7279'
                                key: {
                                    name: 'x_153639_demo_ide.demo_admin'
                                }
                            }
                            contains: {
                                id: 'f49ed84a08f346058aae01f6b60ff2a8'
                                key: {
                                    name: 'x_153639_demo_ide.demo_manager'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebcc2a5fc3104625b5026be7fc1fb573'
                        key: {
                            name: 'x_153639_demo_ide_branch_table'
                            element: 'branchstring'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f3599516b66a4e6fbd3d480f546d6441'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide_simple_task'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f49ed84a08f346058aae01f6b60ff2a8'
                        deleted: true
                        key: {
                            name: 'x_153639_demo_ide.demo_manager'
                        }
                    },
                ]
            }
        }
    }
}
