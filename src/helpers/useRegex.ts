const useRegex = () =>{

    const isTextNormal = (text:string):boolean =>{
        const variable = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ.?()@_,*#¿=:/-]{2,300}$/
        return variable.test(text);
    }
    const isTextArea = (text:string):boolean =>{
        const variable = /^[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ.?()@_,#¿=:/-]{0,300}$/
        return variable.test(text);
    }
    const isSelect = (text:string):boolean =>{
        if(text === '0') return false
        const variable = /^[a-zA-Z\d\sáéíóúÁÉÍÓÚñÑ.?()+*¿=:/-]{1,50}$/;
        return variable.test(text);
    }
    const isPasswrod = (text:string):boolean =>{
        const variable = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9\sáéíóúÁÉÍÓÚñÑ.,@_#$%&/()=?¡!-]{8,300}$/
        return variable.test(text);
    }
    const isNumber = (text:string):boolean =>{
        const variable = /^\d{1,30}(\.\d{0,10})?$/
        // const variable = /^\d{1,30}$/
        return variable.test(text);
    }

    const isDate = (text:string):boolean =>{
        const variable = /^\d{4}([-/.])(0?[1-9]|1[0-2])\1(3[01]|[12][0-9]|0?[1-9])$/
        return variable.test(text);
    }

    const isMail = (text:string):boolean =>{
        const variable = /^[^*]*@[^*]+\.[^*]+$/;
        return variable.test(text);
    }

    const formatedValue = (value:number = 0):string=>{
        if(!value) return '$0';
        if(value % 1 !== 0) return "''"+value+"''";
        return value.toLocaleString('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0})
    }

    const validator = (form:any,input:string,type:any) => {
        const element:any = document.getElementById(input);
        if (element == null) return    
        const typeElement = element.type
        switch (typeElement) {
            case 'text':
                !isTextNormal(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input] = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)                    
                break;
            case 'color':
                !isTextNormal(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input] = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)                    
                break;
            case 'number':
                !isNumber(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input]  = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)     
                
                break;
            case 'email':
                !isMail(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input]  = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)   
                break;
            case 'date':
                !isDate(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input]  = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)   
                break;

            case 'file':
                !isDate(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-pending") , form[type][input]  = true) 
                    : (element.classList.remove("is-pending"), element.classList.add("is-validc") , form[type][input]  = true)   
                break;
            case 'textarea':
                !isTextArea(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input]  = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)   
                break;
            case 'password':
                !isPasswrod(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input]  = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)   
                break;
        
            default:
                !isSelect(element.value) 
                    ? (element.classList.remove("is-validc"), element.classList.add("is-invalid") , form[type][input] = false) 
                    : (element.classList.remove("is-invalid"), element.classList.add("is-validc") , form[type][input]  = true)                    
                break;
        }
    };

    const restoreClass = (input:string) => {
        const element = document.getElementById(input);
        if(!element) return
        element.classList.remove("is-validc")
        element.classList.remove("is-invalid") 
    }

    const parseAdjustments = (adjustments: string): any[][] => {
        const adj = adjustments.split(',').map((value) => {
            const parts = value.split('-');
            const numbers = parts.map((num) => num.trim());
            return numbers;
        });
        return adj.filter((nums) => nums[0] && nums[1] && nums[2] && (nums[3] || "Sin observacion") );
    };


    
    return{
        validator,
        restoreClass,
        formatedValue,
        parseAdjustments
    }
}

export default useRegex