// import Image from "next/image";

interface State {
  id: number;
  name: string;
  abbr: string;
}

interface PageProps {
  states: State[];
}

export default function Page({ states }: PageProps) {
  return (
    <div>
      {states.map((state) => (
        <div key={state.id}>
          {state.name} ({state.abbr})
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps(): Promise<{
  props: PageProps;
}> {
  const res = await fetch(
    "https://raw.githubusercontent.com/magnobiet/states-cities-brazil/main/JSON/states.json"
  );
  const states = await res.json();
  return { props: { states } };
}
