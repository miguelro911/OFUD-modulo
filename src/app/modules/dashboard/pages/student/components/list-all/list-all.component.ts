import { Component } from '@angular/core';
import { Student } from 'src/app/modules/dashboard/util/interfaces/student';

const COLUMNS = [
  { name: 'id', label: 'Id' },
  { name: 'name', label: 'Nombre' },
  { name: 'lastName', label: 'Apellido' },
  { name: 'document', label: 'Documento' },
  { name: 'birthDate', label: 'Fecha de nacimiento' },
  { name: 'code', label: 'Código' },
  { name: 'personalMail', label: 'Correo personal' },
  { name: 'instituteMail', label: 'Correo institucional' },
  { name: 'cellPhone', label: 'Teléfono' },
]

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent {

  spinner: boolean = false;
  studentsRetrieved: Array<Student> = [{
    id: "1",
    name: 'Juan',
    lastName: 'Perez',
    document: '123456789',
    birthDate: new Date('1990-01-01'),
    code: 123456,
    personalMail: 'correotest1@gmail.com',
    instituteMail: 'correotest2@gmail.com',
    cellPhone: 123,
    proyectId: '1',
    documentTypeId: '1'
  }];

  constructor() {
  }

  displayed_columns: Array<string> = COLUMNS.map(column => column.name);
  columns_schema: any = COLUMNS;

}
