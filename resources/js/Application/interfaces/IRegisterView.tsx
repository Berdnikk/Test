import { RouteComponentProps } from 'react-router-dom';

interface IRegisterViewProps extends RouteComponentProps<any> {
    regist: boolean,
    setRegis(status: boolean): boolean
}

export default IRegisterViewProps;

