export type Post = {
    type: string,
    id?: string | null | undefined,
    content: string,
    owner?: string | null | undefined,
    timestamp: number,
};