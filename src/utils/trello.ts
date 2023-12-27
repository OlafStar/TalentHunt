const trelloApi = process.env.TRELLO_API;
const trelloToken = process.env.TRELLO_TOKEN;
const placeholderBoard = process.env.TRELLO_PLACEHODER_BOARD;

export const createTrelloBoard = async (name: string) => {
    let boardId: string | undefined = undefined;

    try {
        const response = await fetch(
            `https://api.trello.com/1/boards/?name=${name}&idBoardSource=${placeholderBoard}&key=${trelloApi}&token=${trelloToken}`,
            {
                method: 'POST',
            },
        );
        console.log(
            `Trello board creation response: ${response.status} ${response.statusText}`,
        );

        const data = await response.json();
        boardId = data.id;
        console.log('Trello board created:', data);
    } catch (err) {
        console.error('Error creating Trello board:', err);
    }

    return boardId;
};

export const addMemberToTrello = async (
    boardId: string,
    email: string,
    bodyData: {fullName: string},
) => {
    await fetch(
        `https://api.trello.com/1/boards/${boardId}/members?email=${email}&key=${trelloApi}&token=${trelloToken}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyData),
        },
    )
        .then((response) => {
            console.log(`Response: ${response.status} ${response.bodyUsed}`);
            return response.text();
        })
        .then((text) => console.log(text))
        .catch((err) => console.error(err));
};
