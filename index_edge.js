/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'l1',
                type: 'image',
                rect: ['-753px', '-2773px','1629px','6249px','auto', 'auto'],
                clip: ['rect(-2568.421142578125px 1629px 6249px 0px)'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/l1.svg','0px','0px'],
                transform: [[],[],[],['0.07366','0.07366']]
            },
            {
                id: '_30',
                type: 'image',
                rect: ['-503px', '45px','1113px','1078px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/30.svg','0px','0px'],
                transform: [[],['-90'],[],['0.1','0.1']]
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['17px', '-3127px','150px','6810px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/l2.svg','0px','0px'],
                transform: [[],[],[],['0.05','0.05621']]
            },
            {
                id: 'l33',
                type: 'image',
                rect: ['-34px', '-2896px','290px','6380px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/l3.svg','0px','0px'],
                transform: [[],[],[],['0.06','0.06']]
            },
            {
                id: '_270_2123',
                type: 'image',
                rect: ['-19px', '558px','155px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/270_2123.jpg','0px','0px']
            },
            {
                id: 't4',
                type: 'image',
                rect: ['-735px', '334px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/t4.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't0',
                type: 'image',
                rect: ['-315px', '-236px','1123px','410px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/t0.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['-143px', '-99px','636px','282px','auto', 'auto'],
                text: "на тротуарну плитку",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 30, "rgba(252,214,53,1.00)", "400", "none", "normal"],
                transform: [[],['-90']]
            },
            {
                id: 'Text3',
                type: 'text',
                rect: ['-237px', '60px','712px','186px','auto', 'auto'],
                text: "-30%",
                align: "left",
                font: ['Arial Black, Gadget, sans-serif', 50, "rgba(248,248,248,1.00)", "400", "none", "normal"],
                transform: [[],['-90']]
            },
            {
                id: '_270_212',
                type: 'image',
                rect: ['-18px', '550px','155px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/270_212.jpg','0px','0px']
            },
            {
                id: 't1',
                type: 'image',
                rect: ['-759px', '334px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/t1.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_270_2121',
                type: 'image',
                rect: ['-18px', '552px','155px','122px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/270_2121.jpg','0px','0px']
            },
            {
                id: 't2',
                type: 'image',
                rect: ['-375px', '334px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/t2.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_270_2122',
                type: 'image',
                rect: ['0px', '567px','122px','104px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/270_2122.jpg','0px','0px']
            },
            {
                id: 't3',
                type: 'image',
                rect: ['-738px', '334px','1321px','424px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'https://raw.githubusercontent.com/DeathBarmaglot/monolit/master/images/t3.svg','0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_l2}": [
                ["style", "top", '-3127px'],
                ["transform", "scaleY", '0.05621'],
                ["transform", "scaleX", '0.05'],
                ["style", "opacity", '1'],
                ["style", "left", '33px'],
                ["style", "clip", [7177.77783203125,150,6810,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__270_2122}": [
                ["style", "top", '567px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '104px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '122px']
            ],
            "${_l1}": [
                ["style", "top", '-2773px'],
                ["style", "height", '6249px'],
                ["transform", "scaleY", '0.07366'],
                ["style", "left", '-753px'],
                ["transform", "scaleX", '0.07366'],
                ["style", "opacity", '0'],
                ["style", "clip", [-2568.421142578125,1629,6249,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '1629px']
            ],
            "${_t4}": [
                ["style", "top", '334px'],
                ["style", "height", '424px'],
                ["style", "left", '-735px'],
                ["style", "width", '1321px']
            ],
            "${__270_2123}": [
                ["style", "top", '558px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '122px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-19px'],
                ["style", "width", '155px']
            ],
            "${__270_212}": [
                ["style", "top", '550px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '122px'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["style", "left", '-18px'],
                ["style", "width", '155px']
            ],
            "${_Text2}": [
                ["transform", "rotateZ", '-90deg'],
                ["color", "color", 'rgba(252,214,53,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-143px'],
                ["style", "font-size", '30px'],
                ["style", "top", '-99px'],
                ["style", "text-align", 'left'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "clip", [0,30,282,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_t0}": [
                ["style", "top", '-236px'],
                ["style", "height", '410px'],
                ["style", "left", '-315px'],
                ["style", "width", '1123px']
            ],
            "${__30}": [
                ["style", "top", '45px'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '1078px'],
                ["style", "opacity", '1'],
                ["style", "left", '-911px'],
                ["style", "width", '1113px']
            ],
            "${_t1}": [
                ["style", "top", '334px'],
                ["style", "height", '424px'],
                ["style", "left", '-375px'],
                ["style", "width", '1321px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(0,73,184,1.00)'],
                ["style", "width", '120px'],
                ["style", "height", '670px'],
                ["style", "overflow", 'hidden']
            ],
            "${__270_2121}": [
                ["style", "top", '552px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "height", '122px'],
                ["style", "opacity", '0'],
                ["style", "left", '-18px'],
                ["style", "width", '155px']
            ],
            "${_t3}": [
                ["style", "top", '334px'],
                ["style", "height", '424px'],
                ["style", "left", '-470px'],
                ["style", "width", '1321px']
            ],
            "${_l33}": [
                ["style", "top", '-2896px'],
                ["transform", "scaleY", '0.06'],
                ["transform", "scaleX", '0.06'],
                ["style", "opacity", '1'],
                ["style", "left", '-127px'],
                ["style", "clip", [6700,290,6380,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_t2}": [
                ["style", "top", '334px'],
                ["style", "height", '424px'],
                ["style", "left", '-375px'],
                ["style", "width", '1321px']
            ],
            "${_Text3}": [
                ["style", "top", '60px'],
                ["style", "font-family", 'Arial Black, Gadget, sans-serif'],
                ["style", "text-align", 'left'],
                ["transform", "rotateZ", '-90deg'],
                ["color", "color", 'rgba(248,248,248,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-237px'],
                ["style", "font-size", '50px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10250,
            autoPlay: true,
            timeline: [
                { id: "eid156", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 3584, duration: 591 },
                { id: "eid45", tween: [ "style", "${_l33}", "left", '106px', { fromValue: '-127px'}], position: 2708, duration: 115 },
                { id: "eid78", tween: [ "style", "${_t1}", "left", '-597px', { fromValue: '-375px'}], position: 3888, duration: 233 },
                { id: "eid122", tween: [ "style", "${_t1}", "left", '-606px', { fromValue: '-597px'}], position: 4121, duration: 636, easing: "easeOutQuad" },
                { id: "eid125", tween: [ "transform", "${__270_212}", "scaleY", '1', { fromValue: '0'}], position: 4121, duration: 383 },
                { id: "eid132", tween: [ "style", "${__270_212}", "opacity", '1', { fromValue: '0'}], position: 3888, duration: 1052 },
                { id: "eid128", tween: [ "style", "${__270_212}", "opacity", '0', { fromValue: '1'}], position: 5354, duration: 917 },
                { id: "eid85", tween: [ "style", "${_t2}", "left", '-601px', { fromValue: '-375px'}], position: 5583, duration: 888, easing: "easeOutQuad" },
                { id: "eid145", tween: [ "transform", "${__270_2122}", "scaleY", '1', { fromValue: '0'}], position: 8002, duration: 327 },
                { id: "eid88", tween: [ "style", "${_t3}", "left", '-601px', { fromValue: '-470px'}], position: 7750, duration: 697, easing: "easeOutQuad" },
                { id: "eid39", tween: [ "style", "${_l33}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 458 },
                { id: "eid51", tween: [ "style", "${__270_2121}", "opacity", '1', { fromValue: '0'}], position: 5583, duration: 917 },
                { id: "eid140", tween: [ "style", "${__270_2121}", "opacity", '0', { fromValue: '1'}], position: 7250, duration: 917 },
                { id: "eid121", tween: [ "transform", "${__270_2123}", "scaleY", '1', { fromValue: '0'}], position: 2599, duration: 446, easing: "easeOutQuad" },
                { id: "eid53", tween: [ "style", "${__270_2123}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 796 },
                { id: "eid130", tween: [ "style", "${__270_2123}", "opacity", '0', { fromValue: '1'}], position: 3583, duration: 1356 },
                { id: "eid158", tween: [ "style", "${_Text2}", "clip", [0,636,282,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,30,282,0]}], position: 3583, duration: 592 },
                { id: "eid163", tween: [ "style", "${_l1}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 645 },
                { id: "eid40", tween: [ "style", "${_l1}", "opacity", '0', { fromValue: '1'}], position: 2141, duration: 458 },
                { id: "eid138", tween: [ "transform", "${__270_2121}", "scaleX", '1', { fromValue: '0'}], position: 5888, duration: 287 },
                { id: "eid2", tween: [ "style", "${_l2}", "clip", [0,150,6810,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [7177.77783203125,150,6810,0]}], position: 0, duration: 1000 },
                { id: "eid41", tween: [ "style", "${_l2}", "opacity", '0', { fromValue: '1'}], position: 2250, duration: 458 },
                { id: "eid46", tween: [ "style", "${__30}", "left", '-560px', { fromValue: '-911px'}], position: 3125, duration: 115 },
                { id: "eid155", tween: [ "style", "${_Text3}", "opacity", '1', { fromValue: '0'}], position: 2823, duration: 591 },
                { id: "eid144", tween: [ "transform", "${__270_2122}", "scaleX", '1', { fromValue: '0'}], position: 8002, duration: 327 },
                { id: "eid126", tween: [ "transform", "${__270_212}", "scaleX", '1', { fromValue: '0'}], position: 4121, duration: 383 },
                { id: "eid120", tween: [ "transform", "${__270_2123}", "scaleX", '1', { fromValue: '0'}], position: 2599, duration: 446, easing: "easeOutQuad" },
                { id: "eid52", tween: [ "style", "${__270_2122}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 897 },
                { id: "eid30", tween: [ "style", "${_l33}", "clip", [0,290,6380,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [6700,290,6380,0]}], position: 0, duration: 1000 },
                { id: "eid61", tween: [ "style", "${_t0}", "top", '-175px', { fromValue: '-236px'}], position: 3428, duration: 622, easing: "easeOutQuad" },
                { id: "eid137", tween: [ "transform", "${__270_2121}", "scaleY", '1', { fromValue: '0'}], position: 5888, duration: 287 },
                { id: "eid89", tween: [ "style", "${_t4}", "left", '-597px', { fromValue: '-735px'}], position: 2438, duration: 435, easing: "easeOutQuad" },
                { id: "eid42", tween: [ "style", "${__30}", "opacity", '0', { fromValue: '1'}], position: 2667, duration: 458 },
                { id: "eid43", tween: [ "style", "${_l2}", "left", '157px', { fromValue: '33px'}], position: 2708, duration: 115 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1700398");
