Package.describe({
    summary: "HighCharts 3D charts for Meteor",
    version: "0.3.0",
    git: "https://github.com/MaazAli/highcharts-3d",
    name: "maazalik:highcharts-3d"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0.3.2');
    api.use('jquery');
    api.use('templating');
    
    // basic highcharts
    api.use('maazalik:highcharts@0.3.0');
    api.imply('maazalik:highcharts@0.3.0');
    // gauge
    api.addFiles([
      'lib/highcharts-3d.js',
    ], 'client');
});
