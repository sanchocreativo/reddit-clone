import posts from './posts';

export default function* () {
    yield* [
        ...posts
    ];
}
