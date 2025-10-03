import { getPostBySlug, getPostSlugs } from '@/lib/post';
import { notFound } from 'next/navigation';
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from 'next/image';

type Params = {
  params: { slug: string };
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function CasePage({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  console.log("Fetched post:", post);

  if (!post) return notFound();

  return (
    <div>
      <Container>
        {/* Breadcrumb */}
        <div className="flex items-center justify-start gap-4 text-sm text-gray-500 px-5 mt-5 xl:ml-16">
          <a href="/blog" className="hover:underline font-semibold text-gray-600 whitespace-nowrap">
            ← Quay về blog
          </a>
          <span className="text-gray-300">|</span>
          {post.category && (
            <>
              <span className="whitespace-nowrap">{post.category}</span>
              <span className="text-gray-300">|</span>
            </>
          )}
          {post.date && (
            <>
              <span className="whitespace-nowrap">{new Date(post.date).getFullYear()}</span>
              <span className="text-gray-300">|</span>
            </>
          )}
          {post.readingTime && (
            <span className="whitespace-nowrap">{post.readingTime} phút đọc</span>
          )}
        </div>

        {/* Tiêu đề */}
        <h1 className="text-3xl xl:text-5xl font-bold text-gray-900 mt-5 ml-5 xl:ml-20 mr-10 xl:mr-20">
          {post.title}
        </h1>

        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">

            {/* Trích dẫn */}
            {post.quote && (
              <blockquote className="md:col-span-2 border-l-4 border-gray-900 pl-4 italic text-lg xl:text-xl text-gray-800">
                <span className="text-4xl text-gray-900 mr-2">“</span>
                {post.quote}
              </blockquote>
            )}

            {/* Thông tin khách hàng */}
            {post.client && (
              <div className="flex items-center gap-4 pl-3">
                <Image
                  src={post.client.image}
                  alt={post.client.name}
                  width={64}
                  height={64}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {post.client.name} {post.client.age && `(${post.client.age})`}
                  </p>
                  <p className="text-gray-600">{post.client.job}</p>
                </div>
              </div>
            )}

            {/* Chuyên gia chia sẻ */}
            {post.expert && (
              <div className="flex items-center justify-between text-sm text-gray-500">
                <p>Case study này được ghi lại bởi:</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={post.expert.image}
                    alt={post.expert.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{post.expert.name}</p>
                    <p className="text-gray-500 text-xs">{post.expert.title}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Nội dung Markdown */}
          <Container>
            <article
              className="prose prose-lg max-w-none space-y-6 pl-5 pr-2 xl:pr-44 xl:text-xl text-left text-gray-800"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Lời mời kết nối */}
            <div className="xl:pl-10 my-12 py-6 pr-2 bg-gray-100 rounded-xl xl:w-5/6 w-full">
              <SectionTitle
                preTitle="kết nối nhé"
                title="Tôi có thể hỗ trợ gì cho bạn?"
                align="left"
              >
                Mỗi case study, mỗi dự án và mỗi cải tiến được chia sẻ tại đây phản ánh một niềm tin đơn giản: những con số được chăm chút sẽ tạo ra thay đổi mạnh mẽ.
                <br /><br />
                Nếu bạn cần một người quan tâm cả những con số lẫn con người phía sau doanh nghiệp, tôi rất sẵn lòng lắng nghe câu chuyện của bạn.
                <br /><br />
                Hãy cùng trò chuyện để tìm ra hướng đi phù hợp nhất.
              </SectionTitle>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
}
