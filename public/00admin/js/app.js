var _0x4512d7=_0x1845;(function(_0x17a8a5,_0x33e59b){var _0x5e5b22=_0x1845,_0x29dbe5=_0x17a8a5();while(!![]){try{var _0x21203f=-parseInt(_0x5e5b22(0x16a))/0x1+parseInt(_0x5e5b22(0x176))/0x2+-parseInt(_0x5e5b22(0x11f))/0x3+parseInt(_0x5e5b22(0x17f))/0x4*(-parseInt(_0x5e5b22(0x15e))/0x5)+parseInt(_0x5e5b22(0x18b))/0x6+parseInt(_0x5e5b22(0x1a1))/0x7*(-parseInt(_0x5e5b22(0x16d))/0x8)+-parseInt(_0x5e5b22(0x120))/0x9*(-parseInt(_0x5e5b22(0x161))/0xa);if(_0x21203f===_0x33e59b)break;else _0x29dbe5['push'](_0x29dbe5['shift']());}catch(_0x456cb7){_0x29dbe5['push'](_0x29dbe5['shift']());}}}(_0x7929,0x90b25));const firebaseConfig={'apiKey':'AIzaSyC4EZmE9IDWwXYp5Fiw7UifheocaJM_c_Q','authDomain':_0x4512d7(0x17c),'projectId':_0x4512d7(0x149),'storageBucket':_0x4512d7(0x144),'messagingSenderId':_0x4512d7(0x1a2),'appId':_0x4512d7(0x198)};firebase[_0x4512d7(0x15d)](firebaseConfig);var database=firebase[_0x4512d7(0x135)](),storageRef=firebase[_0x4512d7(0x188)]()[_0x4512d7(0x133)](),databaseRef=firebase[_0x4512d7(0x135)]()[_0x4512d7(0x133)](_0x4512d7(0x151));function updateItem(){var _0x32021b=_0x4512d7,_0x9cbada=document['getElementById'](_0x32021b(0x19a))['value'],_0x10a6f3=document[_0x32021b(0x154)](_0x32021b(0x122))['value'];database[_0x32021b(0x133)](_0x32021b(0x125)+_0x9cbada)[_0x32021b(0x145)]({'name':_0x10a6f3});}function removeItem(){var _0x16c8f4=_0x4512d7,_0x4b1741=document[_0x16c8f4(0x154)]('itemId')['value'];database[_0x16c8f4(0x133)](_0x16c8f4(0x125)+_0x4b1741)[_0x16c8f4(0x19c)]();}function displayItems(){var _0x4dbb0f=_0x4512d7,_0x3523a0=document[_0x4dbb0f(0x154)](_0x4dbb0f(0x179));_0x3523a0['innerHTML']='',databaseRef[_0x4dbb0f(0x185)](_0x4dbb0f(0x121),function(_0x18717e){var _0xca74cc=_0x4dbb0f;_0x18717e[_0xca74cc(0x140)](function(_0x507750){var _0x4da3c5=_0xca74cc,_0x4c5f5a=_0x507750[_0x4da3c5(0x17b)],_0x433a14=_0x507750[_0x4da3c5(0x193)](),_0x2f4ac6=document[_0x4da3c5(0x16e)]('li');_0x2f4ac6[_0x4da3c5(0x15c)]=_0x4da3c5(0x199);var _0x5373ab=document['createElement']('div');_0x5373ab[_0x4da3c5(0x15c)]=_0x4da3c5(0x12b);var _0x342a4f=document[_0x4da3c5(0x16e)]('div');_0x342a4f[_0x4da3c5(0x15c)]='col-md-3';var _0x18fd13=document['createElement'](_0x4da3c5(0x168));_0x18fd13[_0x4da3c5(0x18c)]=_0x433a14[_0x4da3c5(0x130)],_0x18fd13[_0x4da3c5(0x166)]=_0x4da3c5(0x15a),_0x18fd13[_0x4da3c5(0x15c)]=_0x4da3c5(0x177),_0x18fd13['style'][_0x4da3c5(0x12c)]=_0x4da3c5(0x12f),_0x18fd13['style'][_0x4da3c5(0x192)]='120%',_0x342a4f[_0x4da3c5(0x1a3)](_0x18fd13),_0x5373ab[_0x4da3c5(0x1a3)](_0x342a4f);var _0x469730=document['createElement'](_0x4da3c5(0x152));_0x469730[_0x4da3c5(0x15c)]='col-md-9';var _0x5566b4=document['createElement'](_0x4da3c5(0x152));_0x5566b4[_0x4da3c5(0x165)]=_0x4da3c5(0x15b)+_0x433a14[_0x4da3c5(0x173)]+_0x4da3c5(0x123)+parseFloat(_0x433a14[_0x4da3c5(0x153)])[_0x4da3c5(0x129)](0x2)+'</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><small>Past\x20Price:</small>\x20<del>\x20$'+parseFloat(_0x433a14['pastPrice'])[_0x4da3c5(0x129)](0x2)+_0x4da3c5(0x131),_0x469730[_0x4da3c5(0x1a3)](_0x5566b4),_0x5373ab['appendChild'](_0x469730),_0x2f4ac6[_0x4da3c5(0x1a3)](_0x5373ab),_0x3523a0[_0x4da3c5(0x1a3)](_0x2f4ac6);});});}displayItems();function _0x7929(){var _0x2479b0=['Are\x20you\x20sure?','1:983501289638:web:bec9312b43d8e3225d1c67','list-group-item','itemId','Item\x20not\x20found','remove','120%','delete','result','then','4299029uPQKYk','983501289638','appendChild','368046uIGhli','3497373YpVPgC','value','itemName','</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p><small>Current\x20Price:\x20</small><strong>$','/orderStatus','shoes/','error','<i\x20class=\x22bi\x20bi-trash\x22></i>\x20Delete','display','toFixed','</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20class=\x22btn\x20btn-success\x20btn-change-status\x22\x20onclick=\x22changeOrderStatus(\x27','row','height','push','log','100%','image','</del></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','col-md-3\x20text-right\x20d-flex\x20flex-column\x20justify-content-between','ref','button','database','Image\x20deleted\x20successfully','col-md-6','Error\x20deleting\x20image:','black','block','itemImage','images%2F','fire','btn\x20btn-danger\x20mb-2','orderdetails/','forEach','#d33','open','itemPastPrice','webapptestapi.appspot.com','update','onload','row\x20align-items-center','#3085d6','webapptestapi','catch','order-list','add-item-form','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Name:\x20<strong>','Error\x20fetching\x20order\x20details:','Order\x20Status:\x20','type','shoes','div','currentPrice','getElementById','style','itemCurrentPrice','update-item-list','top-end','isConfirmed','Shoe\x20Image','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<h4>','className','initializeApp','368190lqbAvt','set','reload','40mgGmBA','Yes,\x20delete\x20it!','success','\x27,\x20\x27','innerHTML','alt','put','img','red','461200svtYdo','</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Phone\x20Number:\x20<strong>','onclick','8HfhJPh','createElement','reset','warning','Please\x20fill\x20in\x20all\x20required\x20fields.','green','name','</h4>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Current\x20Price:\x20<strong>$','toLocaleString','790004bmNgLe','img-fluid\x20rounded','btn\x20btn-primary','item-list','Error\x20fetching\x20item\x20details:','key','webapptestapi.firebaseapp.com','closed','card','24ZBsHuv','images/','child','target','orderdetails','Error\x20uploading\x20image:\x20','once','backgroundColor','preview','storage','You\x20won\x27t\x20be\x20able\x20to\x20revert\x20this!','\x27)\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Change\x20Order\x20Status\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','1698864pxhviq','src','split','getDownloadURL','</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Past\x20Price:\x20<del>$','none','card-header','width','val','location','\x20added\x20successfully','files'];_0x7929=function(){return _0x2479b0;};return _0x7929();}function displayUpdateItems(){var _0x45ac29=_0x4512d7,_0x3c9851=document[_0x45ac29(0x154)](_0x45ac29(0x157));_0x3c9851[_0x45ac29(0x165)]='',databaseRef['once'](_0x45ac29(0x121),function(_0x1e7d5c){var _0x26b7cc=_0x45ac29;_0x1e7d5c[_0x26b7cc(0x140)](function(_0xb8fb49){var _0x337481=_0x26b7cc,_0x48c8eb=_0xb8fb49[_0x337481(0x17b)],_0x3ca0b0=_0xb8fb49[_0x337481(0x193)](),_0x3a2d19=document[_0x337481(0x16e)]('li');_0x3a2d19[_0x337481(0x15c)]=_0x337481(0x199);var _0x370b4b=document[_0x337481(0x16e)](_0x337481(0x152));_0x370b4b['className']=_0x337481(0x147);var _0x36e5bc=document[_0x337481(0x16e)](_0x337481(0x152));_0x36e5bc[_0x337481(0x15c)]='col-md-3';var _0x1d7c91=document[_0x337481(0x16e)]('img');_0x1d7c91[_0x337481(0x18c)]=_0x3ca0b0['image'],_0x1d7c91[_0x337481(0x166)]=_0x337481(0x15a),_0x1d7c91['className']='img-fluid\x20rounded',_0x1d7c91[_0x337481(0x155)][_0x337481(0x12c)]=_0x337481(0x12f),_0x1d7c91[_0x337481(0x155)][_0x337481(0x192)]=_0x337481(0x19d),_0x36e5bc['appendChild'](_0x1d7c91),_0x370b4b[_0x337481(0x1a3)](_0x36e5bc);var _0x5eeb5b=document[_0x337481(0x16e)](_0x337481(0x152));_0x5eeb5b[_0x337481(0x15c)]=_0x337481(0x137);var _0x4d40b2=document['createElement'](_0x337481(0x152));_0x4d40b2[_0x337481(0x165)]=_0x337481(0x15b)+_0x3ca0b0[_0x337481(0x173)]+_0x337481(0x174)+parseFloat(_0x3ca0b0[_0x337481(0x153)])[_0x337481(0x129)](0x2)+_0x337481(0x18f)+parseFloat(_0x3ca0b0['pastPrice'])[_0x337481(0x129)](0x2)+_0x337481(0x131),_0x5eeb5b['appendChild'](_0x4d40b2),_0x370b4b[_0x337481(0x1a3)](_0x5eeb5b);var _0x3f4342=document[_0x337481(0x16e)](_0x337481(0x152));_0x3f4342[_0x337481(0x15c)]=_0x337481(0x132);var _0x18f0d1=document[_0x337481(0x16e)]('button');_0x18f0d1[_0x337481(0x150)]=_0x337481(0x134),_0x18f0d1[_0x337481(0x16c)]=function(){deleteItemWithConfirmation(_0x48c8eb);},_0x18f0d1['className']=_0x337481(0x13e),_0x18f0d1[_0x337481(0x165)]=_0x337481(0x127);var _0xb96633=document[_0x337481(0x16e)](_0x337481(0x134));_0xb96633['type']=_0x337481(0x134),_0xb96633[_0x337481(0x16c)]=function(){var _0x2e32a7=_0x337481;openEditModal(_0x48c8eb,_0x3ca0b0[_0x2e32a7(0x173)]);},_0xb96633['className']=_0x337481(0x178),_0x3f4342['appendChild'](_0x18f0d1),_0x370b4b['appendChild'](_0x3f4342),_0x3a2d19['appendChild'](_0x370b4b),_0x3c9851['appendChild'](_0x3a2d19);});});}displayUpdateItems();function deleteItemWithConfirmation(_0x356dcb){var _0xfca1e4=_0x4512d7;Swal['fire']({'title':_0xfca1e4(0x197),'text':_0xfca1e4(0x189),'icon':_0xfca1e4(0x170),'showCancelButton':!![],'confirmButtonColor':_0xfca1e4(0x148),'cancelButtonColor':_0xfca1e4(0x141),'confirmButtonText':_0xfca1e4(0x162)})[_0xfca1e4(0x1a0)](_0x29e32e=>{var _0x45f772=_0xfca1e4;_0x29e32e[_0x45f772(0x159)]&&(deleteItem(_0x356dcb),Swal['fire']({'title':'Deleted!','text':'Your\x20file\x20has\x20been\x20deleted.','icon':_0x45f772(0x163)}));});}function deleteItem(_0x105637){var _0x3a159a=_0x4512d7;database['ref'](_0x3a159a(0x125)+_0x105637)['once'](_0x3a159a(0x121))['then'](function(_0xa16305){var _0x47985c=_0x3a159a,_0x57fdd4=_0xa16305['val']();if(_0x57fdd4){database['ref'](_0x47985c(0x125)+_0x105637)[_0x47985c(0x19c)]();var _0x106992=_0x57fdd4[_0x47985c(0x130)],_0x510ca2=_0x106992[_0x47985c(0x18d)](_0x47985c(0x13c))[0x1][_0x47985c(0x18d)]('?')[0x0],_0x4f81da=firebase[_0x47985c(0x188)]()[_0x47985c(0x133)]()[_0x47985c(0x181)](_0x47985c(0x180)+_0x510ca2);_0x4f81da[_0x47985c(0x19e)]()[_0x47985c(0x1a0)](function(){var _0x3111ec=_0x47985c;console[_0x3111ec(0x12e)](_0x3111ec(0x136));})['catch'](function(_0xf1d58b){var _0x2a5870=_0x47985c;console[_0x2a5870(0x126)](_0x2a5870(0x138),_0xf1d58b);}),displayUpdateItems(),displayItems();}else console[_0x47985c(0x12e)](_0x47985c(0x19b));})[_0x3a159a(0x14a)](function(_0x244f01){var _0x365cd5=_0x3a159a;console['error'](_0x365cd5(0x17a),_0x244f01);});}function previewImage(){var _0xf32669=_0x4512d7,_0x40cdae=document['getElementById'](_0xf32669(0x13b)),_0x54bd52=document[_0xf32669(0x154)](_0xf32669(0x187));if(_0x40cdae[_0xf32669(0x196)]&&_0x40cdae[_0xf32669(0x196)][0x0]){var _0x516e14=new FileReader();_0x516e14[_0xf32669(0x146)]=function(_0x51e521){var _0x49402d=_0xf32669;_0x54bd52[_0x49402d(0x18c)]=_0x51e521[_0x49402d(0x182)][_0x49402d(0x19f)],_0x54bd52['style']['display']=_0x49402d(0x13a);},_0x516e14['readAsDataURL'](_0x40cdae[_0xf32669(0x196)][0x0]);}}function addItem(){var _0x54a325=_0x4512d7,_0x530dac=document['getElementById'](_0x54a325(0x122))[_0x54a325(0x121)],_0x2b6815=document[_0x54a325(0x154)](_0x54a325(0x156))[_0x54a325(0x121)],_0x55d6fa=document[_0x54a325(0x154)](_0x54a325(0x143))[_0x54a325(0x121)],_0x4a9f8e=document[_0x54a325(0x154)](_0x54a325(0x13b))['files'][0x0];if(!_0x530dac||!_0x2b6815){alert(_0x54a325(0x171));return;}var _0x2658a7=storageRef[_0x54a325(0x181)](_0x54a325(0x180)+_0x4a9f8e['name']);_0x2658a7[_0x54a325(0x167)](_0x4a9f8e)[_0x54a325(0x1a0)](function(_0x4cc25a){var _0x34f453=_0x54a325;return _0x4cc25a[_0x34f453(0x133)][_0x34f453(0x18e)]();})[_0x54a325(0x1a0)](function(_0x3ed4d7){var _0x22be32=_0x54a325,_0x17a753=databaseRef[_0x22be32(0x12d)]();_0x17a753[_0x22be32(0x15f)]({'name':_0x530dac,'currentPrice':_0x2b6815,'pastPrice':_0x55d6fa,'image':_0x3ed4d7}),Swal[_0x22be32(0x13d)]({'position':_0x22be32(0x158),'icon':_0x22be32(0x163),'title':_0x530dac+_0x22be32(0x195),'showConfirmButton':![],'timer':0x5dc}),displayUpdateItems(),displayItems(),document['getElementById'](_0x22be32(0x14c))[_0x22be32(0x16f)](),document[_0x22be32(0x154)]('preview')['src']='',document[_0x22be32(0x154)](_0x22be32(0x187))['style'][_0x22be32(0x128)]=_0x22be32(0x190);})[_0x54a325(0x14a)](function(_0x138cdf){var _0xb4ed36=_0x54a325;console[_0xb4ed36(0x126)](_0xb4ed36(0x184),_0x138cdf);});}async function fetchAndDisplayOrders(){var _0x4eea27=_0x4512d7;try{const _0x16b857=database[_0x4eea27(0x133)](_0x4eea27(0x183)),_0x2b49a4=await _0x16b857[_0x4eea27(0x185)](_0x4eea27(0x121)),_0x53f72a=document['getElementById'](_0x4eea27(0x14b));if(_0x2b49a4['exists']()){const _0x2264e3=_0x2b49a4[_0x4eea27(0x193)]();for(const _0x18be7f in _0x2264e3){const {name:_0xa18757,orderDate:_0x305669,phoneNumber:_0x14f172,orderStatus:_0x119399}=_0x2264e3[_0x18be7f],_0x532255=document['createElement']('div');_0x532255[_0x4eea27(0x15c)]=_0x4eea27(0x17e);const _0x5cedda=document['createElement'](_0x4eea27(0x152));_0x5cedda[_0x4eea27(0x15c)]=_0x4eea27(0x191),_0x5cedda['textContent']=_0x4eea27(0x14f)+_0x119399,_0x5cedda['style'][_0x4eea27(0x186)]=_0x119399===_0x4eea27(0x142)?_0x4eea27(0x172):_0x4eea27(0x169),_0x5cedda['style']['color']=_0x4eea27(0x139),_0x532255['appendChild'](_0x5cedda);const _0x171860=document[_0x4eea27(0x16e)]('div');_0x171860['className']='card-body',_0x171860['innerHTML']=_0x4eea27(0x14d)+_0xa18757+_0x4eea27(0x16b)+_0x14f172+'</strong></p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>Order\x20Date:\x20<strong>'+new Date(_0x305669)[_0x4eea27(0x175)]()+_0x4eea27(0x12a)+_0x18be7f+_0x4eea27(0x164)+_0x119399+_0x4eea27(0x18a),_0x532255[_0x4eea27(0x1a3)](_0x171860),_0x53f72a['appendChild'](_0x532255);}}else _0x53f72a[_0x4eea27(0x165)]='<p>No\x20orders\x20available.</p>';}catch(_0x4a7009){console[_0x4eea27(0x126)](_0x4eea27(0x14e),_0x4a7009);}}function _0x1845(_0x538d93,_0x235012){var _0x792936=_0x7929();return _0x1845=function(_0x1845b1,_0x26fdf1){_0x1845b1=_0x1845b1-0x11f;var _0x3041b9=_0x792936[_0x1845b1];return _0x3041b9;},_0x1845(_0x538d93,_0x235012);}function changeOrderStatus(_0xcb275e,_0x55d623){var _0x425351=_0x4512d7;const _0x991b9a=_0x55d623==='open'?_0x425351(0x17d):_0x425351(0x142);database[_0x425351(0x133)](_0x425351(0x13f)+_0xcb275e+_0x425351(0x124))['set'](_0x991b9a),window[_0x425351(0x194)][_0x425351(0x160)]();}fetchAndDisplayOrders();