# -*- coding: utf-8 -*-
##############################################################################
#
#    odtree
#    author:15251908@qq.com (openliu)
#    license:'MIT'
#
##############################################################################

{
    'name': 'Odoo Auto Reload',
    'version': '1.0',
    'category': 'Web',
    'sequence': 14,
    'license':'LGPL-3',
    'description': """
        Odoo Auto Reload
    """,
    'author': 'openliu',
    'website': 'http://www.openliu.com',
    'images': [],
    'depends': ['base'],
    'qweb': [
    ],
    'data': [
        'views/auto_reload.xml',
    ],
    'installable': True,
    'auto_install': False,
    'application': False,
}
# vim:expandtab:smartindent:tabstop=4:softtabstop=4:shiftwidth=4:
