import { FormRow, FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form } from 'react-router-dom';
import { SubmitBtn } from '../components';

function AddJob() {
    const { user } = useOutletContext();

    return (
        <Wrapper>
            <Form method='post' className='from'>
                <h4 className='form-title'>add job</h4>
                <div className='form-center'>
                    <FormRow type='text' name='position' />
                    <FormRow type='text' name='company' />
                    <FormRow
                        type='text'
                        labelText='job location'
                        name='jobLocation'
                        defaultValue={user.location}
                    />
                    <FormRowSelect
                        labelText='job status'
                        name='jobStatus'
                        defaultValue={JOB_STATUS.PENDING}
                        optionsList={Object.values(JOB_STATUS)}
                    />
                    <FormRowSelect
                        labelText='job type'
                        name='jobType'
                        defaultValue={JOB_TYPE.FULL_TIME}
                        optionsList={Object.values(JOB_TYPE)}
                    />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
}

export default AddJob;
