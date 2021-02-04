import React from 'react';
import styles from './FormsControls.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from 'redux-form';

type FormControlPropsType = {
    meta:WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlPropsType> = ({meta: {touched, error}, children}) => {
    const showError = touched && error
    return (
        <div className={styles.formControl + ' ' + (showError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {showError && <span>{error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}> <textarea {...input} {...restProps} /></FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}