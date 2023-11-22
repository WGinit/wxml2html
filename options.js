const defaultTransformOptions = {
    mapping: {
        block: 'div',
        page: 'div',
        view: 'div',
        'scroll-view': 'div',
        swiper: 'div',
        'swiper-item': 'div',
        'movable-view': 'div',
        icon: 'i',
        text: 'span',
        progress: 'div',
        button: 'button',
        'checkbox-group': 'div',
        checkbox: (element, helper) => {
            return `<input type="checkbox"${helper.propsStringify(element.props)} />` + (element.children && element.children.length > 0 ? `${helper.childrenStringify(element.children)}` : '');
        },
        form: 'form',
        input: 'input',
        label: 'label',
        picker: 'div',
        'picker-view': 'div',
        radio: (element, helper) => {
            return `<input type="radio"${helper.propsStringify(element.props)} />` + (element.children && element.children.length > 0 ? `${helper.childrenStringify(element.children)}` : '');
        },
        slider: 'div',
        switch: (element, helper) => {
            return `<input type="checkbox"${helper.propsStringify(element.props)} />` + (element.children && element.children.length > 0 ? `${helper.childrenStringify(element.children)}` : '');
        },
        textarea: 'textarea',
        audio: 'object',
        image: 'img',
        video: 'object',
        map: 'div',
        canvas: 'canvas',
        'contact-button': 'button'
    },
    imageMode: {
        scaleToFill: {name: 'object-fit', value: 'fill'},
        aspectFit: {name: 'object-fit', value: 'contain'},
        aspectFill: {name: 'object-fit', value: 'cover'},
        widthFix: {name: 'style', value: 'max-width: 100%; height: auto;'},
        heightFix: {name: 'style', value: 'max-height: 100%; width: auto;'},
        top: {name: 'object-position', value: 'top center'},
        bottom: {name: 'object-position', value: 'bottom center'},
        left: {name: 'object-position', value: 'center left'},
        right: {name: 'object-position', value: 'center right'},
        center: {name: 'object-position', value: 'center'},
        topLeft: {name: 'object-position', value: 'top left'},
        topRight: {name: 'object-position', value: 'top right'},
        bottomLeft: {name: 'object-position', value: 'bottom left'},
        bottomRight: {name: 'object-position', value: 'bottom right'},
    }
};


module.exports = defaultTransformOptions