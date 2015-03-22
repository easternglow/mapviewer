//<reference path="../js-languative/languative.ts"/>
//<reference path="../js-novotive/novotive.ts"/>
var mapViewer;
(function (mapViewer) {
    mapViewer.mapConfig = {
        zoom: 6,
        centerX: 19.0,
        centerY: 54,
        basemap: "topo",
        mapServices: new Array()
    };
    mapViewer.app;
})(mapViewer || (mapViewer = {}));
novotive.homeUrl = "../";
if (novotive.isUmgdyHost()) {
    novotive.homeUrl = "http://gis.umgdy.gov.pl";
    //mapViewer.config.initConfig.mapServices.push({
    //    serviceType: "WMS",
    //    displayTitle: "Urząd Morski w Gdyni",
    //    url: "http://gis.umgdy.gov.pl/geoserver/wms"
    //});
    languative.modifyDictionary("html", {
        Title: "Maps",
        homePageTitle: "gis.umgdy.gov.pl"
    });
    languative.modifyDictionary("pl", {
        Title: "Mapy",
        AboutContactMail: [
            "Możesz się ze mną skontaktować również za pośrednictwem poczty elektronicznej:",
            "<br />",
            "jakub.szostak(₪)umgdy.gov.pl",
            ""
        ]
    });
}
// umgdy.gov.pl
if (novotive.isDeveloperHost()) {
}
//# sourceMappingURL=mapviewer.js.map