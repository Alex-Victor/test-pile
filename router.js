function route(pathname) {
    var temp = pathname.split("\/");
    var jsonName = temp[temp.length - 1] + ".json";
    console.log("mock file name is " + jsonName)
}
 
exports.route = route;