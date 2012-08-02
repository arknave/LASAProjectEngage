var rotate_image = {"title":"Rotate Image","description":"","date":1336420054653,"scripts":[{"klass":"image manipulation","label":"when image at url [string] loads","script":"(function(){var i = new Image();i.src = {{1}};$(i).load(function(){var can = $(\"<canvas>\")[0];can.height=i.height;can.width=i.width;can.getContext(\"2d\").drawImage(i, 0, 0);local.imagedata_12 = can.getContext(\"2d\").getImageData(0, 0, i.width, i.height);[[1]]});})()","containers":1,"trigger":true,"locals":[{"script":"local.imagedata_12","label":"imagedata_12","klass":"image manipulation","type":"imagedata"}],"sockets":["docs/example_images/rooster.jpg"],"contained":[{"klass":"variables","label":"variable imagedata_2 [imagedata]","script":"local.imagedata_2 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"imagedata_2","script":"local.imagedata_2","type":"imagedata"},"sockets":[{"klass":"image manipulation","label":"new ImageData with size [size]","script":"(function(){ return local.ctx.createImageData({{1}}.w,{{1}}.h);})()","containers":0,"type":"imagedata","locals":[],"sockets":[{"klass":"size","label":"size with width [number:10] height [number:10]","script":"{w: {{1}}, h: {{2}}}","containers":0,"type":"size","locals":[],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] height","script":"{{1}}.height","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"control","label":"repeat [number:10]","script":"for (local.index_3 = 0; local.index_3 < {{1}}; local.index_3++){[[1]]};","containers":1,"locals":[{"script":"local.index_3","label":"loop index_3","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] height","script":"{{1}}.height","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_4 = 0; local.index_4 < {{1}}; local.index_4++){[[1]]};","containers":1,"locals":[{"script":"local.index_4","label":"loop index_4","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"variables","label":"variable pixel_5 [pixel]","script":"local.pixel_5 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"pixel_5","script":"local.pixel_5","type":"pixel"},"sockets":[{"klass":"image manipulation","label":"get pixel at coordinates [number:0] [number:0] from [imagedata]","script":"(function(){ var data = {{3}}.data; var redIndex = ({{1}} * 4) + ({{2}} * {{3}}.width * 4); return { r: data[redIndex], g: data[redIndex + 1], b: data[redIndex + 2]};})()","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"control","label":"loop index_4","script":"local.index_4","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_3","script":"local.index_3","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"image manipulation","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"pixel_5","script":"local.pixel_5","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"imagedata_2","script":"local.imagedata_2","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_3","script":"local.index_3","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"math","label":"[number:0] - [number:0]","script":"({{1}} - {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"control","label":"loop index_4","script":"local.index_4","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}}],"next":""}],"next":{"klass":"image manipulation","label":"draw imageData [imagedata] at point [point]","script":"local.ctx.putImageData({{1}},{{2}}.x,{{2}}.y);","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"imagedata_2","script":"local.imagedata_2","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":["0","0"],"contained":[],"next":""}],"contained":[],"next":""}}}],"next":""}]};
var swap_red_and_blue = {"title":"Swap red and blue","description":"","date":1336420182005,"scripts":[{"klass":"image manipulation","label":"when image at url [string] loads","script":"(function(){var i = new Image();i.src = {{1}};$(i).load(function(){var can = $(\"<canvas>\")[0];can.height=i.height;can.width=i.width;can.getContext(\"2d\").drawImage(i, 0, 0);local.imagedata_20 = can.getContext(\"2d\").getImageData(0, 0, i.width, i.height);[[1]]});})()","containers":1,"trigger":true,"locals":[{"script":"local.imagedata_20","label":"imagedata_20","klass":"image manipulation","type":"imagedata"}],"sockets":["docs/example_images/rooster.jpg"],"contained":[{"klass":"variables","label":"variable imagedata_2 [imagedata]","script":"local.imagedata_2 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"imagedata_2","script":"local.imagedata_2","type":"imagedata"},"sockets":[{"klass":"image manipulation","label":"new ImageData with size [size]","script":"(function(){ return local.ctx.createImageData({{1}}.w,{{1}}.h);})()","containers":0,"type":"imagedata","locals":[],"sockets":[{"klass":"size","label":"size with width [number:10] height [number:10]","script":"{w: {{1}}, h: {{1}}}","containers":0,"type":"size","locals":[],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_20","script":"local.imagedata_20","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"image manipulation","label":"imageData [imagedata] height","script":"{{1}}.height","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_20","script":"local.imagedata_20","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"control","label":"repeat [number:10]","script":"for (local.index_3 = 0; local.index_3 < {{1}}; local.index_3++){[[1]]};","containers":1,"locals":[{"script":"local.index_3","label":"loop index_3","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] height","script":"{{1}}.height","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_20","script":"local.imagedata_20","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_4 = 0; local.index_4 < {{1}}; local.index_4++){[[1]]};","containers":1,"locals":[{"script":"local.index_4","label":"loop index_4","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_20","script":"local.imagedata_20","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"variables","label":"variable pixel_5 [pixel]","script":"local.pixel_5 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"pixel_5","script":"local.pixel_5","type":"pixel"},"sockets":[{"klass":"image manipulation","label":"get pixel at coordinates [number:0] [number:0] from [imagedata]","script":"(function(){ var data = {{3}}.data; var redIndex = ({{1}} * 4) + ({{2}} * {{3}}.width * 4); return { r: data[redIndex], g: data[redIndex + 1], b: data[redIndex + 2]};})()","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"control","label":"loop index_4","script":"local.index_4","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_3","script":"local.index_3","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"image manipulation","label":"imagedata_20","script":"local.imagedata_20","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"variables","label":"variable pixel_11 [pixel]","script":"local.pixel_11 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"pixel_11","script":"local.pixel_11","type":"pixel"},"sockets":[{"klass":"image manipulation","label":"red [number] green [number] blue [number]","script":"{ r : {{1}}, g: {{2}}, b: {{3}} }","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"image manipulation","label":"blue from pixel [pixel]","script":"{{1}}.b","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_5","script":"local.pixel_5","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"image manipulation","label":"green from pixel [pixel]","script":"{{1}}.g","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_5","script":"local.pixel_5","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"image manipulation","label":"red from pixel [pixel]","script":"{{1}}.r","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_5","script":"local.pixel_5","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"pixel_11","script":"local.pixel_11","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"imagedata_2","script":"local.imagedata_2","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_4","script":"local.index_4","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_3","script":"local.index_3","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}}}],"next":""}],"next":{"klass":"image manipulation","label":"draw imageData [imagedata] at point [point]","script":"local.ctx.putImageData({{1}},{{2}}.x,{{2}}.y);","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"imagedata_2","script":"local.imagedata_2","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":["0","0"],"contained":[],"next":""}],"contained":[],"next":""}}}],"next":""}]};
var design = {"title":"Interesting Design","description":"","date":1335733783959,"scripts":[{"klass":"control","label":"when program runs","script":"function _start(){[[1]]}_start();","containers":1,"trigger":true,"locals":[],"sockets":[],"contained":[{"klass":"variables","label":"variable imagedata_12 [imagedata]","script":"local.imagedata_12 = {{1}};","containers":0,"locals":[],"returns":{"label":"imagedata_12","script":"local.imagedata_12","type":"imagedata","klass":"variables"},"sockets":[{"klass":"image manipulation","label":"new ImageData with size [size]","script":"(function(){ return local.ctx.createImageData({{1}}.w,{{1}}.h);})()","containers":0,"type":"imagedata","locals":[],"sockets":[{"klass":"size","label":"size with width [number:10] height [number:10]","script":"{w: {{1}}, h: {{2}}}","containers":0,"type":"size","locals":[],"sockets":["800","800"],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"control","label":"repeat [number:10]","script":"for (local.index_13 = 0; local.index_13 < {{1}}; local.index_13++){[[1]]};","containers":1,"locals":[{"script":"local.index_13","label":"loop index_13","klass":"control","type":"number"}],"sockets":["800"],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_14 = 0; local.index_14 < {{1}}; local.index_14++){[[1]]};","containers":1,"locals":[{"script":"local.index_14","label":"loop index_14","klass":"control","type":"number"}],"sockets":["800"],"contained":[{"klass":"variables","label":"variable pixel_15 [pixel]","script":"local.pixel_15 = {{1}};","containers":0,"locals":[],"returns":{"label":"pixel_15","script":"local.pixel_15","type":"pixel","klass":"variables"},"sockets":[{"klass":"image manipulation","label":"red [number] green [number] blue [number]","script":"{ r : {{1}}, g: {{2}}, b: {{3}} }","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"math","label":"[number:0] mod [number:0]","script":"({{1}} % {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"control","label":"loop index_13","script":"local.index_13","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},"255"],"contained":[],"next":""},{"klass":"math","label":"[number:0] mod [number:0]","script":"({{1}} % {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"control","label":"loop index_14","script":"local.index_14","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},"255"],"contained":[],"next":""},{"klass":"math","label":"[number:0] mod [number:0]","script":"({{1}} % {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"math","label":"[number:0] * [number:0]","script":"({{1}} * {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"control","label":"loop index_13","script":"local.index_13","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_14","script":"local.index_14","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},"255"],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"pixel_15","script":"local.pixel_15","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_13","script":"local.index_13","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_14","script":"local.index_14","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}}],"next":""}],"next":{"klass":"image manipulation","label":"draw imageData [imagedata] at point [point]","script":"local.ctx.putImageData({{1}},{{2}}.x,{{2}}.y);","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"imagedata_12","script":"local.imagedata_12","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":["0","0"],"contained":[],"next":""}],"contained":[],"next":""}}}],"next":""}]};
var invert_colors = {"title":"Invert Colors","description":"","date":1336420325004,"scripts":[{"klass":"image manipulation","label":"when image at url [string] loads","script":"(function(){var i = new Image();i.src = {{1}};$(i).load(function(){var can = $(\"<canvas>\")[0];can.height=i.height;can.width=i.width;can.getContext(\"2d\").drawImage(i, 0, 0);local.imagedata_29 = can.getContext(\"2d\").getImageData(0, 0, i.width, i.height);[[1]]});})()","containers":1,"trigger":true,"locals":[{"script":"local.imagedata_29","label":"imagedata_29","klass":"image manipulation","type":"imagedata"}],"sockets":["docs/example_images/rooster.jpg"],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_7 = 0; local.index_7 < {{1}}; local.index_7++){[[1]]};","containers":1,"locals":[{"script":"local.index_7","label":"loop index_7","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] height","script":"{{1}}.height","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_29","script":"local.imagedata_29","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_8 = 0; local.index_8 < {{1}}; local.index_8++){[[1]]};","containers":1,"locals":[{"script":"local.index_8","label":"loop index_8","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_29","script":"local.imagedata_29","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"variables","label":"variable pixel_9 [pixel]","script":"local.pixel_9 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"pixel_9","script":"local.pixel_9","type":"pixel"},"sockets":[{"klass":"image manipulation","label":"get pixel at coordinates [number:0] [number:0] from [imagedata]","script":"(function(){ var data = {{3}}.data; var redIndex = ({{1}} * 4) + ({{2}} * {{3}}.width * 4); return { r: data[redIndex], g: data[redIndex + 1], b: data[redIndex + 2]};})()","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"control","label":"loop index_8","script":"local.index_8","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_7","script":"local.index_7","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"image manipulation","label":"imagedata_29","script":"local.imagedata_29","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"variables","label":"variable number_17 [number]","script":"local.number_17 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"number_17","script":"local.number_17","type":"number"},"sockets":[{"klass":"math","label":"[number:0] - [number:0]","script":"({{1}} - {{2}})","containers":0,"type":"number","locals":[],"sockets":["255",{"klass":"image manipulation","label":"red from pixel [pixel]","script":"{{1}}.r","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_9","script":"local.pixel_9","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"variables","label":"variable number_18 [number]","script":"local.number_18 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"number_18","script":"local.number_18","type":"number"},"sockets":[{"klass":"math","label":"[number:0] - [number:0]","script":"({{1}} - {{2}})","containers":0,"type":"number","locals":[],"sockets":["255",{"klass":"image manipulation","label":"green from pixel [pixel]","script":"{{1}}.g","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_9","script":"local.pixel_9","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"variables","label":"variable number_19 [number]","script":"local.number_19 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"number_19","script":"local.number_19","type":"number"},"sockets":[{"klass":"math","label":"[number:0] - [number:0]","script":"({{1}} - {{2}})","containers":0,"type":"number","locals":[],"sockets":["255",{"klass":"image manipulation","label":"blue from pixel [pixel]","script":"{{1}}.b","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_9","script":"local.pixel_9","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"variables","label":"variable pixel_20 [pixel]","script":"local.pixel_20 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"pixel_20","script":"local.pixel_20","type":"pixel"},"sockets":[{"klass":"image manipulation","label":"red [number] green [number] blue [number]","script":"{ r : {{1}}, g: {{2}}, b: {{3}} }","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"variables","label":"number_17","script":"local.number_17","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"number_18","script":"local.number_18","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"number_19","script":"local.number_19","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"pixel_20","script":"local.pixel_20","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"image manipulation","label":"imagedata_29","script":"local.imagedata_29","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_8","script":"local.index_8","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_7","script":"local.index_7","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}}}}}}],"next":""}],"next":{"klass":"image manipulation","label":"draw imageData [imagedata] at point [point]","script":"local.ctx.putImageData({{1}},{{2}}.x,{{2}}.y);","containers":0,"locals":[],"sockets":[{"klass":"image manipulation","label":"imagedata_29","script":"local.imagedata_29","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":["0","0"],"contained":[],"next":""}],"contained":[],"next":""}}],"next":""}]};
var stripes = {"title":"Stripe Pattern","description":"","date":1336257367216,"scripts":[{"klass":"control","label":"when program runs","script":"function _start(){[[1]]}_start();","containers":1,"trigger":true,"locals":[],"sockets":[],"contained":[{"klass":"variables","label":"variable imagedata_5 [imagedata]","script":"local.imagedata_5 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"imagedata_5","script":"local.imagedata_5","type":"imagedata"},"sockets":[{"klass":"image manipulation","label":"new ImageData with size [size]","script":"(function(){ return local.ctx.createImageData({{1}}.w,{{1}}.h);})()","containers":0,"type":"imagedata","locals":[],"sockets":[{"klass":"size","label":"size with width [number:10] height [number:10]","script":"{w: {{1}}, h: {{2}}}","containers":0,"type":"size","locals":[],"sockets":["80","80"],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"control","label":"repeat [number:10]","script":"for (local.index_6 = 0; local.index_6 < {{1}}; local.index_6++){[[1]]};","containers":1,"locals":[{"script":"local.index_6","label":"loop index_6","klass":"control","type":"number"}],"sockets":["80"],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_7 = 0; local.index_7 < {{1}}; local.index_7++){[[1]]};","containers":1,"locals":[{"script":"local.index_7","label":"loop index_7","klass":"control","type":"number"}],"sockets":["80"],"contained":[{"klass":"control","label":"if [boolean]","script":"if({{1}}){[[1]]}else{[[2]]}","subContainerLabels":["else"],"containers":2,"locals":[],"sockets":[{"klass":"math","label":"[number:0] < [number:0]","script":"({{1}} < {{2}})","containers":0,"type":"boolean","locals":[],"sockets":[{"klass":"math","label":"[number:0] mod [number:0]","script":"({{1}} % {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"control","label":"loop index_6","script":"local.index_6","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},"20"],"contained":[],"next":""},"10"],"contained":[],"next":""}],"contained":[{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"image manipulation","label":"red [number] green [number] blue [number]","script":"{ r : {{1}}, g: {{2}}, b: {{3}} }","containers":0,"type":"pixel","locals":[],"sockets":["255","0","0"],"contained":[],"next":""},{"klass":"variables","label":"imagedata_5","script":"local.imagedata_5","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_6","script":"local.index_6","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_7","script":"local.index_7","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"image manipulation","label":"red [number] green [number] blue [number]","script":"{ r : {{1}}, g: {{2}}, b: {{3}} }","containers":0,"type":"pixel","locals":[],"sockets":["0","0","0"],"contained":[],"next":""},{"klass":"variables","label":"imagedata_5","script":"local.imagedata_5","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_6","script":"local.index_6","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_7","script":"local.index_7","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"next":""}],"next":""}],"next":{"klass":"image manipulation","label":"draw imageData [imagedata] at point [point]","script":"local.ctx.putImageData({{1}},{{2}}.x,{{2}}.y);","containers":0,"locals":[],"sockets":[{"klass":"variables","label":"imagedata_5","script":"local.imagedata_5","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":["0","0"],"contained":[],"next":""}],"contained":[],"next":""}}}],"next":""}]};
var bw_video = {"title":"Black and White Video","description":"","date":1336419760449,"scripts":[{"klass":"video","label":"For every frame of video at [string:url]","script":"var vid = $(\"<video>\");var v = vid[0];var source = $(\"<source>\");source.prop(\"src\", {{1}});vid.prop(\"controls\", true);vid.append(source);vid.css(\"float\", \"left\");$(\".stage\").prepend(vid);v.addEventListener(\"play\", function(){var canvas = $(\"<canvas>\");var width = v.clientWidth;var height = v.clientHeight;canvas[0].width = width;canvas[0].height = height;var con = canvas[0].getContext(\"2d\");function everyframe(){if (v.paused || v.ended) return false;con.drawImage(v,0, 0, width, height);local.frame_6 = con.getImageData(0, 0, width, height);(function(){ [[1]] }());setTimeout(everyframe, 50);}everyframe();});","containers":1,"trigger":true,"locals":[{"script":"local.frame_6","label":"frame_6","klass":"video","type":"imagedata"}],"sockets":["docs/example_images/magnetic_top.ogg"],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_5 = 0; local.index_5 < {{1}}; local.index_5++){[[1]]};","containers":1,"locals":[{"script":"local.index_5","label":"loop index_5","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] width","script":"{{1}}.width","containers":0,"type":"number","locals":[],"sockets":[{"klass":"video","label":"frame_6","script":"local.frame_6","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"control","label":"repeat [number:10]","script":"for (local.index_6 = 0; local.index_6 < {{1}}; local.index_6++){[[1]]};","containers":1,"locals":[{"script":"local.index_6","label":"loop index_6","klass":"control","type":"number"}],"sockets":[{"klass":"image manipulation","label":"imageData [imagedata] height","script":"{{1}}.height","containers":0,"type":"number","locals":[],"sockets":[{"klass":"video","label":"frame_6","script":"local.frame_6","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[{"klass":"variables","label":"variable pixel_7 [pixel]","script":"local.pixel_7 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"pixel_7","script":"local.pixel_7","type":"pixel"},"sockets":[{"klass":"image manipulation","label":"get pixel at coordinates [number:0] [number:0] from [imagedata]","script":"(function(){ var data = {{3}}.data; var redIndex = ({{1}} * 4) + ({{2}} * {{3}}.width * 4); return { r: data[redIndex], g: data[redIndex + 1], b: data[redIndex + 2]};})()","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"control","label":"loop index_5","script":"local.index_5","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_6","script":"local.index_6","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"video","label":"frame_6","script":"local.frame_6","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":{"klass":"variables","label":"variable number_8 [number]","script":"local.number_8 = {{1}};","containers":0,"locals":[],"returns":{"klass":"variables","label":"number_8","script":"local.number_8","type":"number"},"sockets":[{"klass":"math","label":"[number:0] / [number:0]","script":"({{1}} / {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"math","label":"[number:0] + [number:0]","script":"({{1}} + {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"red from pixel [pixel]","script":"{{1}}.r","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_7","script":"local.pixel_7","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"math","label":"[number:0] + [number:0]","script":"({{1}} + {{2}})","containers":0,"type":"number","locals":[],"sockets":[{"klass":"image manipulation","label":"green from pixel [pixel]","script":"{{1}}.g","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_7","script":"local.pixel_7","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"image manipulation","label":"blue from pixel [pixel]","script":"{{1}}.b","containers":0,"type":"number","locals":[],"sockets":[{"klass":"variables","label":"pixel_7","script":"local.pixel_7","containers":0,"type":"pixel","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""},"3"],"contained":[],"next":""}],"contained":[],"next":{"klass":"image manipulation","label":"put pixel [pixel] to [imagedata] at point [point]","script":"(function(){ var data = {{2}}.data; var x = {{3}}.x; var y = {{3}}.y; var redIndex = (x * 4) + (y * {{2}}.width * 4); data[redIndex] = {{1}}.r; data[redIndex + 1] = {{1}}.g; data[redIndex + 2] = {{1}}.b; data[redIndex + 3] = 255;})();","containers":0,"locals":[],"sockets":[{"klass":"image manipulation","label":"red [number] green [number] blue [number]","script":"{ r : {{1}}, g: {{2}}, b: {{3}} }","containers":0,"type":"pixel","locals":[],"sockets":[{"klass":"variables","label":"number_8","script":"local.number_8","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"number_8","script":"local.number_8","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"variables","label":"number_8","script":"local.number_8","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""},{"klass":"video","label":"frame_6","script":"local.frame_6","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":[{"klass":"control","label":"loop index_5","script":"local.index_5","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"control","label":"loop index_6","script":"local.index_6","containers":0,"type":"number","locals":[],"sockets":[],"contained":[],"next":""}],"contained":[],"next":""}],"contained":[],"next":""}}}],"next":""}],"next":{"klass":"image manipulation","label":"draw imageData [imagedata] at point [point]","script":"local.ctx.putImageData({{1}},{{2}}.x,{{2}}.y);","containers":0,"locals":[],"sockets":[{"klass":"video","label":"frame_6","script":"local.frame_6","containers":0,"type":"imagedata","locals":[],"sockets":[],"contained":[],"next":""},{"klass":"point","label":"point at x [number:0] y [number:0]","script":"{x: {{1}}, y: {{2}}}","containers":0,"type":"point","locals":[],"sockets":["0","0"],"contained":[],"next":""}],"contained":[],"next":""}}],"next":""}]};
var demos = [ rotate_image, swap_red_and_blue, design, invert_colors, stripes, bw_video ]

populate_demos_dialog(demos);
