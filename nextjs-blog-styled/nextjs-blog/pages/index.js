import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
  console.log('allPostsDats:', allPostsData)
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Olena likes to talk about programming aloat and bla]</p>
                <p>
                    (This is just a template sample - you can modify and
                    customize this to your heart's content)
                </p>
            </section>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}


//Second version with props
// export default function Home(props) {
//   console.log('allPostsDats:', props.allPostsData)
//     return (
//         <Layout home>
//             <Head>
//                 <title>{siteTitle}</title>
//             </Head>
//             <section className={utilStyles.headingMd}>
//                 <p>[Olena likes to talk about programming aloat and bla]</p>
//                 <p>
//                     (This is just a template sample - you can modify and
//                     customize this to your heart's content)
//                 </p>
//             </section>
//             <section
//                 className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
//             >
//                 <h2 className={utilStyles.headingLg}>Blog</h2>
//                 <ul className={utilStyles.list}>
//                     {props.allPostsData.map(({ id, date, title }) => (
//                         <li className={utilStyles.listItem} key={id}>
//                             <Link href={`/posts/${id}`}>{title}</Link>
//                             <br />
//                             <small className={utilStyles.lightText}>
//                               <Date dateString={date} />
//                             </small>
//                         </li>
//                     ))}
//                 </ul>
//             </section>
//         </Layout>
//     );
// }