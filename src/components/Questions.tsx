import { Question } from '../types';
import Answers from './Answers';
import Questions_module from './Questions.module.scss';

type Props = {
    questions: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionComp(props: Props) {
    return (
        <div className={Questions_module.QuestionContainer}>
            <h3 className={Questions_module.h3Question}>{props.questions.question}</h3>
            <Answers question={props.questions} onSubmit={props.onSubmit} />
        </div>
    );
}
export default QuestionComp;
