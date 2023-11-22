
const { each } = require('./util.js');
const p5 = require('parse5');
const defaultTransformOptions = require('./options.js')


const styleMerge = (props) => {
    let styles = '', newProps = [];
    for (const item of props) {
        if (item.name === 'style') {
            const lastChar = styles.charAt(styles.length - 1);
            if (!styles || lastChar === ';') {
                styles += item.value
            } else {
                styles += `;${item.value}`
            }
        } else {
            newProps.push(item)
        }
    }

    if (styles) {
        let temp = {
            name: 'style',
            value: styles
        }
        newProps.push(temp)
    }
    return newProps
}

const elementToObject = (element) => {
    let result;
    if (element.nodeName === '#text') {
        result = element.value;
    } else {
        result = {
            props: [],
            children: []
        };
        result.tag = (element.nodeName || element.tagName).toLowerCase();
        var onlyNameAttrs = [];
        if (element.attrs && element.attrs.length > 0) {
            Object.keys(element.attrs).forEach(name => {
                var attr = element.attrs[name];
                if (name.length === attr.endOffset - attr.startOffset) {
                    onlyNameAttrs.push(name);
                }
            });
            each(element.attrs, attr => {
                if (onlyNameAttrs.indexOf(attr.name) === -1) {
                    let temp = {
                        name: attr.name,
                        value: attr.value
                    }
                    if (element.nodeName === 'img' && attr.name === 'mode') {
                        temp = defaultTransformOptions.imageMode[attr.value] || {}
                    }
                    result.props.push(temp)

                } else {
                    result.props.push({
                        name: attr.name,
                        onlyName: true
                    })
                }
            });
            result.props = styleMerge(result.props);
        }
        if (element.childNodes && element.childNodes.length > 0) {
            each(element.childNodes, item => {
                result.children.push(elementToObject(item));
            });
        }
    }
    return result;
}

const toObject = (wxmlContent) => {
    const result = [],
        dom = p5.parse(wxmlContent, {
            locationInfo: true
        }),
        body = dom.childNodes[0].childNodes[1];
    each(body.childNodes, item => {
        result.push(elementToObject(item));
    });
    return result;
}

module.exports = toObject;