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
        scaleToFill: 'object-fit: fill',
        aspectFit: 'object-fit: contain',
        aspectFill: 'object-fit: cover',
        widthFix: 'max-width: 100%; height: auto;',
        heightFix: 'max-height: 100%; width: auto;',
        top: 'object-position: top center',
        bottom: 'object-position: bottom center',
        left: 'object-position: center left',
        right: 'object-position: center right',
        center: 'object-position: center',
        topLeft: 'object-position: top left',
        topRight: 'object-position: top right',
        bottomLeft: 'object-position: bottom left',
        bottomRight: 'object-position: bottom right',
    }
};


module.exports = defaultTransformOptions