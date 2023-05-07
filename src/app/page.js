import AddPost from "./components/addPost";
import { getContainer } from "./DB/getContainer";
import Post from "./components/post";

export default async function Home() {
	const container = await getContainer();
	const posts = (await container.items.query("SELECT * FROM c ORDER BY c.time DESC").fetchAll()).resources;

	return (
		<main className='flex min-h-screen flex-col items-center justify-between gap-3 p-24'>
			<AddPost />
			{posts.map((post) => {
				return <Post postData={post} key={post.id} />;
			})}
		</main>
	);
}
