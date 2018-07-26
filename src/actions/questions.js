export const GET_QUESTIONS = 'GET_QUESTIONS'


export default function recieveQuestions(questions) {
    return {
        type : GET_QUESTIONS,
        questions

    }
}

