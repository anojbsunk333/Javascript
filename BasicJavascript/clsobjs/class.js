class AdmissionForm{
    submit() {
        alert(this.name + ": Your form is submitted"
        )
    }
    cancel(){
        alert(this.name + ": This form is cancelled")
    }
    fill(givenname){
        this.name = givenname
    }
}

//create a form for anoj
let anojForm = new AdmissionForm()

// fill the form with anoj details
anojForm.fill("Anoj")

//Create a form for surendra
let surendraForm = new AdmissionForm()

//fill the form with surendra details
surendraForm.fill("Surendra")

anojForm.submit()
surendraForm.submit()
anojForm.cancel()