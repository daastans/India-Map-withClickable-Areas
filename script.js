var basic_opts = {
    mapKey: 'state'
};

var initial_opts = $.extend({},basic_opts, 
    { 
        staticState: true,
        fill: false,
        stroke: true,
        strokeWidth: 2,
        strokeColor: 'ff0000'
    });

$('img').mapster(initial_opts)
    .mapster('set',true,'CA', {
        fill: true,
        fillColor: '00ff00'
    })
    .mapster('snapshot')
    .mapster('rebind',basic_opts);

var basic_opts = {
    mapKey: 'state'
};

var initial_opts = $.extend({},basic_opts, 
    { 
        staticState: true,
        fill: false,
        stroke: true,
        strokeWidth: 2,
        strokeColor: 'ff0000'
    });

$('img').mapster(initial_opts)
    .mapster('set',true,'CA', {
        fill: true,
        fillColor: '00ff00'
    })
    .mapster('snapshot')
    .mapster('rebind',basic_opts);

