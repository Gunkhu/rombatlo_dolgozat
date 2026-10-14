import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rombusz',
  imports: [ReactiveFormsModule],
  templateUrl: './rombusz.component.html',
  styleUrl: './rombusz.component.css',
})
export class RombuszComponent {
  builder = inject(FormBuilder)

  rombuszForm = this.builder.group({
    eDiagonal: ['',[Validators.required,Validators.min(1)]],
    fDiagonal: ['',[Validators.required,Validators.min(1)]],
    volume: ['']
  })

  showVolume = false


  startCalc(){
    const eDiagonal = Number(this.rombuszForm.value.eDiagonal)
    const fDiagonal = Number(this.rombuszForm.value.fDiagonal)
    const volume = this.calcVolume(eDiagonal, fDiagonal)
    this.rombuszForm.get('volume')?.setValue(String(volume))
    this.showVolume = true
  }
  calcVolume(eDiagonal:number,fDiagonal:number):number{
    const volume = 0.5*eDiagonal*fDiagonal
    return volume
  }
}
