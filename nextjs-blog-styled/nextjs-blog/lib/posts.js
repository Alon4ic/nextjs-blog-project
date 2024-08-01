import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

const postsDirectiry = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
	const  fileNames = fs.readdirSync(postsDirectiry);
	const allPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, '');

		const fullPath =path.join(postsDirectiry,fileName);

		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data
			
		};
	});
	return allPostsData.sort((a,b) => {
		if(a.date < b.date) {
			return 1;
		} else {
			return -1
		}
	});
}

export function getAllPostsIds() {

	/*
	you could use ISR revalidate the props every so often (60 secs ex)
	fetch or ajax call...
	constres = await fetch('...');
	const posts await res.json()
	return posts.map((post) => {
		return {
			params: {
				id: post.id
			},
			revalidate: dataChange ? 10 : false;
		}})
	*/
	const fileNames = fs.readdirSync(postsDirectiry);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, '')
			},
		};
	});
}

export async function getPostData(id) {
	const fullPath = path.join(postsDirectiry, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	
	const matterResult = matter(fileContents);

	const  processedContent = await remark()
	.use(html)
	.process(matterResult.content);
	const contentHtml = processedContent.toString()
	return {
		id,
		contentHtml,
		...matterResult.data,
	};
}