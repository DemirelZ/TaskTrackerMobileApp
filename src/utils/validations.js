import * as Yup from 'yup';
 
export const taskSchema = Yup.object().shape({
 
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  startDate: Yup.string().required('Required'),
  endDate: Yup.string().required('Required'),
});

