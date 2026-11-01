import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span>
        {profile.current.role} · {profile.location}
      </span>
      <span>
        Built with TypeScript ✦ —{" "}
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </span>
    </footer>
  );
}
