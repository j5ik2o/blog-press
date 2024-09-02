type Props = {
  params: { slug: string; }
}

const Page = ({ params }: Props) => {
  const { slug } = params;
  console.log(slug);
  return <>
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="max-w-4xl w-full space-y-8">
        <h1>{slug}</h1>
      </div>
    </main>
  </>
;
};

export default Page;
