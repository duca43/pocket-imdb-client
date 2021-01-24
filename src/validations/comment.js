import * as Yup from 'yup';

export const CommentSchema = Yup.object().shape({
    comment: Yup.string()
        .max(500, 'Sorry, your comment is too long :/')
        .required('Oops! Comment cannot be empty!')
});