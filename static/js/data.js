const data = () => ({
    step: '',
    page: 0,

    init(){
        this.iniciar()
    },

    iniciar(){
        this.step = 'step1'
        this.page = 1
    },

    proxForm(step){
        this.page = step
        switch(step){
            case 1: this.step = 'step1'; break
            case 2: this.step = 'step2'; break
            case 3: this.step = 'step3'; break
            case 4: this.step = 'step4'; break
            case 5: this.step = 'step5'; break
            case 6: this.step = 'step6'; break
            case 7: this.step = 'step7'; break
        }
    } 
})




