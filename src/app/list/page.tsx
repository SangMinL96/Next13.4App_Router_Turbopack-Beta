import ListDetail from "@/components/ListDetail";
import Head from "next/head";
import React, { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
// @Get('/next13-test')
// getTest(): any {
//   return [
//     { id: 1, text: '17' },
//     { id: 2, text: '16' },
//     { id: 3, text: '15' },
//     { id: 4, text: '14' },
//     { id: 5, text: '13' },
//     { id: 6, text: '11' },
//   ];
// }
// @Get('/next13-test/:id')
// getTestId(@Param('id') id: string): any {
//   return [
//     { id: 1, text: '17' },
//     { id: 2, text: '16' },
//     { id: 3, text: '15' },
//     { id: 4, text: '14' },
//     { id: 5, text: '13' },
//     { id: 6, text: '11' },
//   ].find(item => String(item.id) === id);
// }
export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  // fetch data
  const product = await fetch(`http://localhost:4000/next13-test`).then((res) =>
    res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product?.[0].text}test`,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}
async function getList() {
  const res = await fetch(`http://localhost:4000/next13-test`);
  return res.json();
}

export default async function Page({
  params: { username },
}: {
  params: { username: string };
}) {
  // Wait for the artist
  const artist = await getList();

  return (
    <>
      <h1>{artist?.[0].text}</h1>
      <Head>
        <title>Create Next App1231</title>
      </Head>
      <Suspense fallback={<div>Loading...</div>}>
        {/* @ts-expect-error Async Server Component */}
        <ListDetail listId={2} />
      </Suspense>
    </>
  );
}
