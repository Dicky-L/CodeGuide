for (${1:prop} in ${2:obj}) {
    if (${2:obj}.hasOwnProperty(${1:prop})) {
        ${3}
    }
}
