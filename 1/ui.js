const nebula = {




boot: function() {
    document.querySelectorAll('module').forEach((request) => {
        let moduleContentToImport = this.fetch(request.getAttribute('src'))

        request.getAttributeNames().forEach((attr) => {
            let attrName = attr
            let attrValue = request.getAttribute(attr)

            moduleContentToImport = moduleContentToImport.replaceAll(`_${attrName}_`, attrValue)
            
            moduleContentToImport = moduleContentToImport.replaceAll('{Page Title}', document.title)
            moduleContentToImport = moduleContentToImport.replaceAll('{URL}', document.URL)
        })

        request.innerHTML = moduleContentToImport;
    })
    main()
},

fetch: function(url) {
    let xmlhttp = new XMLHttpRequest()

    xmlhttp.addEventListener('readystatechange', function( ){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            return xmlhttp.responseText
        }
    })

    xmlhttp.open("GET", url, false)
    xmlhttp.send()

    return xmlhttp.response
},




}